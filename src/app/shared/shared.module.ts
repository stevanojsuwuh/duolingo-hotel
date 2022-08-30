import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'

const components = [
  FooterComponent,
  HeaderComponent,
  NotFoundComponent,

]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    ScrollToModule.forRoot()
  ],
  exports: [...components]
})
export class SharedModule { }
