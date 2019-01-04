import { Injectable } from '@angular/core';
import {INoteService} from './INoteService';
import {Note} from '../entities/note';

@Injectable({
  providedIn: 'root'
})
export class MockNoteService implements INoteService{

  notes: Note[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.notes.push({
        title: `Hello World ${i}`,
        context: 'Say hello to the entire world! Say hello to the entire world! Say hello to the entire world! ' +
          'Say hello to the entire world! Say hello to the entire world! Say hello to the entire world! ' +
          'Say hello to the entire world! Say hello to the entire world!'
      });
    }
  }

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }
}
