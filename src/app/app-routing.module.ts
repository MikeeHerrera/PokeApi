import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //Cuanod entres quiero que cargues unas rutas hijas
    loadChildren: () =>import ('./components/layout/layout.module').then(m => m.LayoutModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
