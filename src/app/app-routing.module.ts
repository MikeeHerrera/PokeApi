import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LayoutModule } from './components/layout/layout.module';

const routes: Routes = [
  {path: "", loadChildren: () => import("./components/layout/layout.module").then(m => m.LayoutModule) },
  {path: "", pathMatch: "full", redirectTo: "home" },
  {path : "**", pathMatch: "full", redirectTo: "home" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
