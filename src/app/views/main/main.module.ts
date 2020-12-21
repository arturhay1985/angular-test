import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

import { MainNavbarComponent } from './_components';

@NgModule({
  declarations: [
    MainComponent,
    MainNavbarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ],
  entryComponents: [],

})
export class MainModule { }
