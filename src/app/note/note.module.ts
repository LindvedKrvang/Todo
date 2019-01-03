import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import {OverviewComponent} from './overview/overview.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import {MockNoteService} from './shared/services/mock-note.service';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PortalModule} from '@angular/cdk/portal';
import {OverlayModule} from '@angular/cdk/overlay';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CoreModule} from '../core/core.module';
import { NoteFormComponent } from './note-form/note-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    OverviewComponent,
    NoteComponent,
    SummaryPipe,
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    PortalModule,
    OverlayModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: 'INoteService', useClass: MockNoteService }
  ]
})
export class NoteModule { }
