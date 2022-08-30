import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArticleComponent } from './components/article/article.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ResumeComponent,
    ProfileComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ResumeComponent
  ]
})
export class ResumeModule { }