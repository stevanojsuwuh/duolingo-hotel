import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ChildAComponent } from './sample-route/component-a/child-a/child-a.component';
import { ComponentAComponent } from './sample-route/component-a/component-a.component';
import { ChildBComponent } from './sample-route/component-a/child-b/child-b.component';
import { ComponentBComponent } from './sample-route/component-b/component-b.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';


// Konsep Eager Load
const routes: Routes = [ // sets up routes constant where you define your routes
  // for lazy load
  // { path: '', loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule) },
  { path: 'component-a', component: ComponentAComponent },
  // { path: '',   redirectTo: '/component-a', pathMatch: 'full' }, // redirect to `component-a`
  { path: '**', component: NotFoundComponent }, // wildcard route for a 404 page
] 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }