import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';




@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HomeModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
