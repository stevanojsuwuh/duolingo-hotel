import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    HomeRoutingModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
