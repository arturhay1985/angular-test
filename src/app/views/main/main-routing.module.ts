import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';


const mainRoutes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'calendar',
                loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
            },
            {
                path: 'hotels',
                loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule)
            },
            {
                path: 'my-events',
                loadChildren: () => import('./my-events/my-events.module').then(m => m.MyEventsModule)
            },
            {
                path: 'notes',
                loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
            },
            {
                path: 'messages',
                loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
            },
            {
                path: 'my-account',
                loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountModule)
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
