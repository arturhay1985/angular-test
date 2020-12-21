import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes-routing.module';



@NgModule({
  declarations: [NotesComponent],
  imports: [
    NotesRoutingModule,
    CommonModule
  ]
})
export class NotesModule { }
