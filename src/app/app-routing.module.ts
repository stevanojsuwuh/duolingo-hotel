import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ChildAComponent } from './pages/sample/component-a/child-a/child-a.component';
import { ComponentAComponent } from './pages/sample/component-a/component-a.component';
import { ChildBComponent } from './pages/sample/component-a/child-b/child-b.component';
import { ComponentBComponent } from './pages/sample/component-b/component-b.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';


// Konsep Eager Load
const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: '',   redirectTo: '/component-a', pathMatch: 'full' }, // redirect to `component-a`
  { path: '**', component: NotFoundComponent }, // wildcard route for a 404 page
] 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }