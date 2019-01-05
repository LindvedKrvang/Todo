import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver, EventEmitter,
  Inject,
  Injector,
  OnInit, Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {INoteService} from '../shared/services/INoteService';
import {Note} from '../shared/entities/note';
import {CdkPortal, DomPortalHost, PortalHost, TemplatePortal} from '@angular/cdk/portal';
import {CdkOverlayOrigin, GlobalPositionStrategy, Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'todo-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  emitter = new EventEmitter<boolean>();

  notes: Note[];

  constructor(@Inject('INoteService') private noteService: INoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }


  newNoteClick() {
    this.emitter.emit();
  }
}
