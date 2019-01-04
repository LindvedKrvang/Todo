import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayContainerComponent} from './overlay-container/overlay-container.component';
import {MatCardModule} from '@angular/material';
import {PortalModule} from '@angular/cdk/portal';
import {OverlayModule} from '@angular/cdk/overlay';
import {OverlayService} from './shared/overlay.service';
import { GenerateTitlePipe } from './shared/pipes/generate-title.pipe';

@NgModule({
  declarations: [
    OverlayContainerComponent,
    GenerateTitlePipe
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
