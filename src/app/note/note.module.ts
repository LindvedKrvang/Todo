import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import {OverviewComponent} from './overview/overview.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import {MockNoteService} from './shared/services/mock-note.service';

@NgModule({
  declarations: [
    OverviewComponent,
    NoteComponent,
    SummaryPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'INoteService', useClass: MockNoteService }
  ]
})
export class NoteModule { }
