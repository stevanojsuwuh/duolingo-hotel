import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { RouterModule } from '@angular/router';
import { ChildAComponent } from './component-a/child-a/child-a.component';
import { ChildBComponent } from './component-a/child-b/child-b.component';



@NgModule({
  declarations: [ComponentAComponent, ComponentBComponent, ChildAComponent, ChildBComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ComponentAComponent, ComponentBComponent, ChildAComponent, ChildBComponent
  ]
})
export class SampleRouteModule { }
