import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from '../shared/components/not-found/not-found.component'
import { AnimeComponent } from './anime/anime.component'
import { ResumeComponent } from './resume/resume.component'

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'demo/resume', component: ResumeComponent },
  { path: 'demo/anime', loadChildren: () => import('./anime/anime.module').then((m) => m.AnimeModule) },
  { path: 'demo/todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  { path: 'demo/sample', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule) },
]

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }