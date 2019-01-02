import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {listener} from '@angular/core/src/render3';
import {CdkPortal} from '@angular/cdk/portal';
import {CdkOverlayOrigin, Overlay, OverlayConfig} from '@angular/cdk/overlay';

@Component({
  selector: 'todo-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.scss']
})
export class OverlayContainerComponent implements OnInit {

  @Input() shouldCreateListener: EventEmitter<boolean>;

  @Input() positionOrigin: CdkOverlayOrigin;

  @ViewChild(CdkPortal) portal;

  constructor(private overlay: Overlay) { }

  ngOnInit() {
    this.shouldCreateListener.subscribe(() => {
      this.createOverlay();
    });
  }

  createOverlay() {
    const strategy = this.overlay.position()
      .connectedTo(this.positionOrigin.elementRef,
        {originX: 'start', originY: 'top'},
        {overlayX: 'end', overlayY: 'bottom'});

    const config = new OverlayConfig({
      positionStrategy: strategy,
      hasBackdrop: true
    });

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.portal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}
