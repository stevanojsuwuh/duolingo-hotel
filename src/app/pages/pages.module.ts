import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../pages/header/header.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { ResourceComponent } from '../pages/resource/resource.component';
import { NextStepComponent } from '../pages/next-step/next-step.component';
import { RocketComponent } from '../pages/rocket/rocket.component';

const components = [
  HeaderComponent,
  FooterComponent,
  ResourceComponent,
  NextStepComponent,
  RocketComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class PagesModule { }
