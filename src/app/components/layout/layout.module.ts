import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { dashboardService } from "./services/dashboard.service";
import { DashboardSearchComponent } from "../dashboard-search/dashboard-search.component";



@NgModule({
  declarations: [
    LayoutComponent, 
    DashboardComponent,
    DashboardSearchComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  providers: [
    dashboardService
  ],
  exports: [LayoutRoutingModule]
})
export class LayoutModule { }
