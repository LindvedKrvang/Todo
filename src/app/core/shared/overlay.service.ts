import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  private closeOverlayEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  get getCloseOverlayEmitter(): EventEmitter<boolean> {
    return this.closeOverlayEmitter;
  }

  emitCloseOverlayEmitter(): void {
    this.closeOverlayEmitter.emit();
  }
}
