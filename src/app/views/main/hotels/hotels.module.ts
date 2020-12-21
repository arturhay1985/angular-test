import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels.component';
import { HotelsRoutingModule } from './hotels-routing.module';



@NgModule({
  declarations: [HotelsComponent],
  imports: [
    HotelsRoutingModule,
    CommonModule
  ]
})
export class HotelsModule { }
