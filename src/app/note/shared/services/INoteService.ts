import {Note} from '../entities/note';

export interface INoteService {
  getNotes(): Note[];

  addNote(note: Note): void;

  deleteNote(id: number): void;
}
