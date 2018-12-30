import { Injectable } from '@angular/core';
import {INoteService} from './INoteService';
import {Note} from '../entities/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements INoteService{

  constructor() { }

  getNotes(): Note[] {
    return null;
  }

}
