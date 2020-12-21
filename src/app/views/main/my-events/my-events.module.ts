import { NgModule } from '@angular/core';

import { MyEventsComponent } from './my-events.component';
import { MyEventsRoutingModule } from './my-events-routing.module';
import { CommonModule } from '@angular/common';
import {
  DynamicFormComponent,
  GroomBridgeAccountComponent,
  EventDescriptionComponent,
  GuestsListComponent,
  VendorComponent,
  StepProgressComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperService } from './services/stepper.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    StepProgressComponent,
    MyEventsComponent,
    DynamicFormComponent,
    GroomBridgeAccountComponent,
    EventDescriptionComponent,
    GuestsListComponent,
    VendorComponent,
  ],
  imports: [
    CommonModule,
    MyEventsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    StepperService
  ]
})
export class MyEventsModule { }
