import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './note/overview/overview.component';

export enum RoutPaths {
  TODO_OVERVIEW = 'todo/overview'
}

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutPaths.TODO_OVERVIEW,
    pathMatch: 'full'
  },
  {
  path: RoutPaths.TODO_OVERVIEW,
  component: OverviewComponent
  },
  {
    path: '**',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
