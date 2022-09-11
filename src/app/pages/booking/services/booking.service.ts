import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { Book } from '../model/booking.model';

const BOOK_KEY = 'books';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: Book[]=[];
  constructor (
    private readonly sessionService: SessionService
  ) {}


  list(): Observable<Book[]> {
    return new Observable<Book[]>((observer: Observer<Book[]>) => {
      const bookValue: string = this.sessionService.get(BOOK_KEY);
      try {
        const books: Book[] = bookValue? JSON.parse(bookValue): [{
          id: 1,
          status: "reserved",
          roomNumber: "101",
          duration: 2,
          guestCount: 2,
          reservee: {
            id: 1,
            name: "John Doe",
            email: "example@example.com",
            phone: "08123456789"
          }
        }];
        this.bookings = books;
        this.updateSessionStorage();
        observer.next(this.bookings);
      } catch (error: any) {
        observer.error(error.message);
      }
      observer.complete();
    });
  }

  get(bookingId: number): Observable<Book> {
    return new Observable<Book>((observer: Observer<Book>) => {
      try {
        const book: Book = this.bookings.find(item => item.id === bookingId) as Book;
        observer.next(book);
      } catch (error) {
        console.error(error);
      }
      observer.complete();
    });
  }

  save(booking: Book): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        const bookId: number = this.bookings.findIndex((item) =>( item.id === booking.id));
        console.log('bookingId',booking.id);
        console.log('booking list',this.bookings);


        console.log('bookId',bookId);

        if(bookId === -1) {
          this.bookings.push(booking);
        } else {
          this.bookings[bookId] = booking;
        }
        this.updateSessionStorage();
        observer.next();
      } catch (error) {
        console.error(error);
      }
      observer.complete();
    });
  }

  checkIn(bookingId: number): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        this.bookings.forEach((item) => {
          if(item.id === bookingId) item.status = "checked-in";
        })
        this.updateSessionStorage();
        observer.next();
      } catch (error) {
        console.error(error);

      }
      observer.complete();
    });
  };
  checkOut(bookingId: number): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        this.bookings.forEach((item) => {
          if(item.id === bookingId) item.status = "checked-out";
          this.updateSessionStorage();
        })
        observer.next();
      } catch (error) {
        console.error(error);

      }
      observer.complete();
    });
  };
  remove(bookingId: number): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        this.bookings = this.bookings.filter(item => item.id !== bookingId);
        this.updateSessionStorage();
        observer.next();
      } catch (error) {
        console.error(error);
      }
      observer.complete();
    });
  }

  private updateSessionStorage(): void {

    try {
      this.sessionService.set(BOOK_KEY, JSON.stringify(this.bookings));
    } catch (error) {
      console.error(error);
    }

  }


}
