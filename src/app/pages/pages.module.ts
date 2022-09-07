import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { ResumeModule } from './resume/resume.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SampleModule } from './sample/sample.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    HomeRoutingModule,
    ResumeModule,
    PagesRoutingModule,
    SampleModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
