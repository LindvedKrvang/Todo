import { Injectable } from '@angular/core';
import {INoteService} from './INoteService';
import {Note} from '../entities/note';

@Injectable({
  providedIn: 'root'
})
export class MockNoteService implements INoteService{

  notes: Note[] = [];

  private idCounter = 0;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.notes.push({
        id: ++this.idCounter,
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
    note.id = ++this.idCounter;
    this.notes.push(note);
  }

  deleteNote(id: number): void {
    const indexOfNote = this.notes.findIndex(note => note.id === id);
    this.notes.splice(indexOfNote, 1);
  }
}
