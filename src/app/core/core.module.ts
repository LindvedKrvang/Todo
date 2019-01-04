import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayContainerComponent} from './overlay-container/overlay-container.component';
import {MatCardModule} from '@angular/material';
import {PortalModule} from '@angular/cdk/portal';
import {OverlayModule} from '@angular/cdk/overlay';
import {OverlayService} from './shared/overlay.service';

@NgModule({
  declarations: [
    OverlayContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    PortalModule,
    OverlayModule
  ],
  exports: [
    OverlayContainerComponent
  ],
  providers: [OverlayService]
})
export class CoreModule { }
