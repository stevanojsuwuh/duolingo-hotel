import { FormGroup } from "@angular/forms";
import { Book } from "../model/booking.model";

export interface IBookFormComponent {
  booking?: Book;
  bookingGroup: FormGroup;
  onSubmitReservation(): void;
  onFormReset(): void;
}

export interface IBookListComponent {
  bookings: Book[];
  onReserve(booking: Book): void;
  onCheckIn(bookingId: number): void;
  onCheckOut(bookingId: number): void;
  onDeleteReservation(bookingId: number): void;
}