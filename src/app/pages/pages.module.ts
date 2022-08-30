import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HomeModule,
    RouterModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
