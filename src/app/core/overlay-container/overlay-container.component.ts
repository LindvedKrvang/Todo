import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {listener} from '@angular/core/src/render3';
import {CdkPortal} from '@angular/cdk/portal';
import {CdkOverlayOrigin, Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {OverlayService} from '../shared/overlay.service';

@Component({
  selector: 'todo-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.scss']
})
export class OverlayContainerComponent implements OnInit {

  @Input() shouldCreateListener: EventEmitter<boolean>;

  @Input() positionOrigin: CdkOverlayOrigin;

  @ViewChild(CdkPortal) portal;

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay, private overlayService: OverlayService) { }

  ngOnInit() {
    this.shouldCreateListener.subscribe(() => {
      this.createOverlay();
    });
    this.overlayService.getCloseOverlayEmitter.subscribe(() => {
      if (this.overlayRef) this.overlayRef.dispose();
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

    this.overlayRef = this.overlay.create(config);
    this.overlayRef.attach(this.portal);
    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.dispose());
  }
}
