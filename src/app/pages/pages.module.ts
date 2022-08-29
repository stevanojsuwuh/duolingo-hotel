import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { SkillHighlightsComponent } from './skill-highlights/skill-highlights.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  PortofolioComponent,
  ProfileComponent,
  EducationComponent,
  SkillHighlightsComponent,
  ExperiencesComponent,
  SpecializationComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...components]
})
export class PagesModule { }
