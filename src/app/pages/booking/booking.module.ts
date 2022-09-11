import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [
    BookListComponent

  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
