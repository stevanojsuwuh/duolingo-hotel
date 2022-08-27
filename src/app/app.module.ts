import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleSampleComponent } from './sample/sample-sample.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { NextStepComponent } from './pages/next-step/next-step.component';
import { RocketComponent } from './pages/rocket/rocket.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleSampleComponent,
    HeaderComponent,
    FooterComponent,
    ResourceComponent,
    NextStepComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
