import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from '../shared/components/not-found/not-found.component'
import { ResumeComponent } from './resume/resume.component'
import { TodoComponent } from './todo/todo.component'

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'demo/resume', component: ResumeComponent },
  { path: 'demo/todo', component: TodoComponent },
  { path: '**', component: NotFoundComponent },
]

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }