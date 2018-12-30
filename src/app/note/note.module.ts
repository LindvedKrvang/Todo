import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import {OverviewComponent} from './overview/overview.component';

@NgModule({
  declarations: [
    OverviewComponent,
    NoteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NoteModule { }
