import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { RoomComponent } from '../room/room.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }