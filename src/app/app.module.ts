import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumeModule } from './resume/resume.module';
import { SampleRouteModule } from './sample-route/sample-route.module';
import { AppRoutingModule } from './app-routing.module';


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
    SampleRouteModule,
    AppRoutingModule, // Untuk memunculkan routerLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
