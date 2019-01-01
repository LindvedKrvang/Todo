import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import {OverviewComponent} from './overview/overview.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import {MockNoteService} from './shared/services/mock-note.service';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PortalModule} from '@angular/cdk/portal';
import {OverlayModule} from '@angular/cdk/overlay';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    OverviewComponent,
    NoteComponent,
    SummaryPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    PortalModule,
    OverlayModule,
    DragDropModule
  ],
  providers: [
    { provide: 'INoteService', useClass: MockNoteService }
  ]
})
export class NoteModule { }
