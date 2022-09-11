import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormRoutingModule } from './book-form-routing.module';
import { BookFormComponent } from './book-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookFormComponent
  ],
  imports: [
    CommonModule,
    BookFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookFormModule { }
