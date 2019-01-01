import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {INoteService} from '../shared/services/INoteService';
import {Note} from '../shared/entities/note';
import {CdkPortal, DomPortalHost, PortalHost, TemplatePortal} from '@angular/cdk/portal';
import {Overlay} from '@angular/cdk/overlay';

@Component({
  selector: 'todo-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit {

  private portalHost: PortalHost;

  notes: Note[];

  @ViewChild(CdkPortal) portal;

  constructor(@Inject('INoteService') private noteService: INoteService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private appRef: ApplicationRef,
              private overlay: Overlay) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  ngAfterViewInit(): void {
    this.portalHost = new DomPortalHost(document.querySelector('#portal'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector);

    // this.portalHost.attach(this.portal);
  }

  click() {
    const overlayRef = this.overlay.create();
    overlayRef.attach(this.portal);
  }


}
