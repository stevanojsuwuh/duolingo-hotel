import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs';
import Swal from 'sweetalert2';
import { BookListComponent } from '../book-list/book-list.component';
import { IBookFormComponent } from '../interfaces/book-interfaces';
import { BookingField } from '../model/booking-field.model';
import { Book, Guest } from '../model/booking.model';
import { BookingService } from '../services/booking.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, IBookFormComponent {

  constructor(
    private readonly bookService: BookingService,
    private readonly route : ActivatedRoute,
    private readonly router: Router
  ) { }
  onFormReset(): void {
    throw new Error('Method not implemented.');
  }

  booking?: Book | undefined;
  id?: number;
  field: typeof BookingField = BookingField;

  bookingGroup: FormGroup = new FormGroup({
    [BookingField.ID]: new FormControl(null),
    [BookingField.NAMA_TAMU]: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    [BookingField.EMAIL_TAMU]: new FormControl(null, [Validators.required, Validators.email]),
    [BookingField.NO_TELP_TAMU]: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    [BookingField.NO_KAMAR]: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    [BookingField.LAMA_INAP]: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    [BookingField.JUMLAH_TAMU]: new FormControl(null, [Validators.required, Validators.minLength(1)]),
  })

  onSubmitReservation(): void {
    let id: number = 0;
    if(!this.booking){
    this.bookService.list().subscribe({
      next: (bookings) => {
        id = bookings.length + 1;
      }
    })
  } else {
    id = this.booking.id;
  }
    const guest: Guest = {
      id: id,
      name: this.bookingGroup.value.namaTamu,
      email: this.bookingGroup.value.emailTamu,
      phone: this.bookingGroup.value.noTelpTamu
    }
    const book: Book = {
      id: id,
      status: 'reserved',
      roomNumber: this.bookingGroup.value.noKamar,
      duration: this.bookingGroup.value.lamaInap,
      guestCount: this.bookingGroup.value.jumlahTamu,
      reservee: guest
    }
    this.bookService.save(book).subscribe()
    if(this.id){
      Swal.fire({
        icon: 'success',
        title: `Reservation ${book.roomNumber} has been changed`,
        showConfirmButton: false
      })
    }
    else {
      Swal.fire({
        icon: 'success',
        title: `Reservation ${book.roomNumber} has been added`,
        showConfirmButton: false
      })
    }
    this.bookingGroup.reset();
    this.router.navigateByUrl('/booking/bookedlist');

  }

  setFormValue(): void {
    if (this.booking) {
      this.bookingGroup.get(BookingField.ID)?.setValue(this.booking.id);
      this.bookingGroup.get(BookingField.NAMA_TAMU)?.setValue(this.booking.reservee.name);
      this.bookingGroup.get(BookingField.EMAIL_TAMU)?.setValue(this.booking.reservee.email);
      this.bookingGroup.get(BookingField.NO_TELP_TAMU)?.setValue(this.booking.reservee.phone);
      this.bookingGroup.get(BookingField.NO_KAMAR)?.setValue(this.booking.roomNumber);
      this.bookingGroup.get(BookingField.LAMA_INAP)?.setValue(this.booking.duration);
      this.bookingGroup.get(BookingField.JUMLAH_TAMU)?.setValue(this.booking.guestCount);
    } else if (this.bookingGroup) {
      this.bookingGroup.reset();
    }

  }

  ngOnInit(): void {

    this.route.params.pipe(
      map((params: Params) =>{
        return params['id'] ? +params['id'] : null;
      })
    ).subscribe((id: any) => {
      this.id = id;
      this.bookService.get(id).subscribe(result=>{
        this.booking = result;
      })
      this.setFormValue();

    })
  }




}
