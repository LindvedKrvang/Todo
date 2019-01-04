import {Component, Inject, Input, OnInit} from '@angular/core';
import {Note} from '../shared/entities/note';
import {NoteService} from '../shared/services/note.service';
import {INoteService} from '../shared/services/INoteService';

@Component({
  selector: 'todo-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  contentSummaryLength = 130;

  @Input()
  note: Note;

  constructor() {

  }

  ngOnInit() {

  }

}
