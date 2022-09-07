import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ChildBComponent } from './component-a/child-b/child-b.component';
import { ChildAComponent } from './component-a/child-a/child-a.component';


@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    ChildBComponent,
    ChildAComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    RouterModule
  ]
})
export class SampleModule { }
