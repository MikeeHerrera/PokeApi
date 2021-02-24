import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {PlatformModule} from '@angular/cdk/platform';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, PaginatorComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    PlatformModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatGridListModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PaginatorComponent
  ]
})
export class SharedModule { }
