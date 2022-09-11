import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { IBookListComponent } from '../interfaces/book-interfaces';
import { Book } from '../model/booking.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, IBookListComponent {

  nightlyfee: number = environment.nightlifee;
  constructor(
    private readonly bookingService: BookingService,
    private readonly router: Router
  ) { }
  bookings: Book[]=[];

  ngOnInit(): void {
    this.loadBooking();
    console.log(this.bookings);
  }
  onReserve(booking: Book): void {
    this.router.navigateByUrl(`/booking/bookingform/${booking.id}`);
  }
  onCheckIn(bookingId: number): void {
    this.bookingService.get(bookingId).subscribe(result => {
      if (result.status === 'checked-out') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Kamar sudah di check out',
        })
      }
      else if (result.status === 'checked-in') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Kamar sudah di check in',
        })
      }
      else {
        this.bookingService.checkIn(bookingId).subscribe(result => {
          this.loadBooking();
        })
      }
    })
  }
  onCheckOut(bookingId: number): void {
    this.bookingService.get(bookingId).subscribe(result => {
      if (result.status === 'checked-out'){
        return Swal.fire({
          icon: 'error',
          title: `Tamu ${result.reservee.name} sudah melakukan check-out`,
          showConfirmButton: true
        })
      } else if (result.status === 'reserved') {
        return Swal.fire({
          icon: 'error',
          title: `Tamu ${result.reservee.name} belum melakukan check-in`,
          showConfirmButton: true
        })
      }
      return Swal.fire({
        icon: 'warning',
        title: `Apakah anda yakin ingin melakukan check-out untuk tamu ${result.reservee.name}?`,
        showCancelButton: true,
        confirmButtonText: 'Ya, saya yakin',
        cancelButtonText: 'Tidak'
      }).then(result => {
        if (result.isConfirmed) {
          this.bookingService.checkOut(bookingId).subscribe(() => {
            Swal.fire({
              icon: 'success',
              title: 'Check-out berhasil',
              showConfirmButton: true
            }).then(() => {
              this.loadBooking();
            })
          })
        }
      }
      )
    })
  }
  onDeleteReservation(bookingId: number): void {
    this.bookingService.get(bookingId).subscribe(result => {
      if (result.status !== 'checked-out') {
        return Swal.fire({
          icon: 'error',
          title: `Data reservasi tidak bisa dihapus karena tamu ${result.reservee.name} belum check-out`,
          showConfirmButton: true
        })
      }
      return Swal.fire({
        title: 'Apakah anda yakin?',
        text: `Data reservasi tamu ${result.reservee.name} akan dihapus`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          this.bookingService.remove(bookingId).subscribe(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.loadBooking();
          })
        }
      })
    })
  }

  loadBooking(): void {
    this.bookingService.list().subscribe({
      next: (bookings) => {
        this.bookings = bookings;
      }
    })
  }





}
