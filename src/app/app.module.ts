import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumeModule } from './pages/resume/resume.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { SampleRoutingModule } from './pages/sample/sample-routing.module';
import { SampleModule } from './pages/sample/sample.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    FontAwesomeModule,
    ResumeModule,
    AppRoutingModule, // Untuk memunculkan routerLink
    PagesRoutingModule,
    SampleRoutingModule,
    SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
