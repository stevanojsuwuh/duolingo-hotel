import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book-form.component';


const routes: Routes = [
  {
    path: '',
    component: BookFormComponent,
  },
  {
    path: ':id',
    component: BookFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookFormRoutingModule { }
