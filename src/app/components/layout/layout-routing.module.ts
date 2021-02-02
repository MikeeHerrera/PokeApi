import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //VA a detectar un path vacio
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: '', //cuando entre, rapido lo redirige a dashboard
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
