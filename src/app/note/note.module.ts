import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import {OverviewComponent} from './overview/overview.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';

@NgModule({
  declarations: [
    OverviewComponent,
    NoteComponent,
    SummaryPipe
  ],
  imports: [
    CommonModule
  ]
})
export class NoteModule { }
