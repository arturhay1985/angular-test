import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyEventsComponent } from './my-events.component';

const myEventsRoutes: Routes = [
    {
        path: '',
        component: MyEventsComponent,
    }
];

@NgModule({
    imports: [ RouterModule.forChild(myEventsRoutes) ],
    exports: [ RouterModule ]
})

export class MyEventsRoutingModule { }
