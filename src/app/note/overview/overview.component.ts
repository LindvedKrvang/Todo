import {Component, Inject, OnInit} from '@angular/core';
import {INoteService} from '../shared/services/INoteService';
import {Note} from '../shared/entities/note';

@Component({
  selector: 'todo-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  notes: Note[];

  constructor(@Inject('INoteService') private noteService: INoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

}
