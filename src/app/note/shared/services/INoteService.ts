import {Note} from '../entities/note';

export interface INoteService {
  getNotes(): Note[];
}
