import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dasboard-routing.module';



@NgModule({
  declarations: [DashboardComponent],
    imports: [
      DashboardRoutingModule,

    CommonModule
  ]
})
export class DashboardModule { }
