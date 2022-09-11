import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookingComponent } from './booking.component';


const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
  },
  {
    path : 'bookedlist',
    component: BookListComponent
  },
  {
    path : 'bookingform',
    loadChildren: () => import('./book-form/book-form.module').then(m => m.BookFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
