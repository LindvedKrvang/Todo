import { Component, OnInit } from '@angular/core';
import {Note} from '../shared/entities/note';

@Component({
  selector: 'todo-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  note: Note;

  constructor() {

  }

  ngOnInit() {
    this.note =  {
      title: 'Hello World',
      context: 'Say hello to the entire world!\nSay hello to the entire world!\nSay hello to the entire world!'
    };
  }

}
