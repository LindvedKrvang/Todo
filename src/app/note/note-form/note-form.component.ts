import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OverlayService} from '../../core/shared/overlay.service';
import {Note} from '../shared/entities/note';
import {NoteService} from '../shared/services/note.service';
import {INoteService} from '../shared/services/INoteService';
import {GenerateTitlePipe} from '../../core/shared/pipes/generate-title.pipe';

@Component({
  selector: 'todo-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('', [Validators.required])
  });
  constructor(private overlayService: OverlayService,
              @Inject('INoteService') private noteService: INoteService) { }

  ngOnInit() {
  }

  onSubmit(titleInput: HTMLInputElement, contentInput: HTMLTextAreaElement) {
    const title = titleInput.value ? titleInput.value : new GenerateTitlePipe().transform(contentInput.value);

    const note: Note = {
      title: title,
      context: contentInput.value
    };
    this.noteService.addNote(note);

    titleInput.value = '';
    contentInput.value = '';

    this.closeForm();
  }

  onCancelClick(titleInput: HTMLInputElement, contentInput: HTMLTextAreaElement) {
    titleInput.value = '';
    contentInput.value = '';
    const contentControl = this.form.get('content');
    contentControl.setErrors({'required': true});
    contentControl.markAsUntouched();

    this.closeForm();
  }

  private closeForm(): void {
    this.overlayService.emitCloseOverlayEmitter();
  }
}
