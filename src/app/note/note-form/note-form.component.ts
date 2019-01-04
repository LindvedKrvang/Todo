import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OverlayService} from '../../core/shared/overlay.service';

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
  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submitted');
  }

  onCancelClick(titleInput: HTMLInputElement, contentInput: HTMLTextAreaElement) {
    titleInput.value = '';
    contentInput.value = '';
    const contentControl = this.form.get('content');
    contentControl.setErrors({'required': true});
    contentControl.markAsUntouched();

    this.overlayService.emitCloseOverlayEmitter();
  }
}
