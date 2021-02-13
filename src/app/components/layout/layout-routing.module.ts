import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { DashboardSearchComponent } from "../dashboard-search/dashboard-search.component";

const routes: Routes = [
  {path: "", component: LayoutComponent, children: [
      {path: "home", component: DashboardComponent},
      {path: "search/:searchResult", component: DashboardSearchComponent},
      {path: "", pathMatch: "full", redirectTo: "home" }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
