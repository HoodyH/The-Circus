import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from "@angular/common";
import {throwIfAlreadyLoaded} from "@core/module-import-guard";

// services
import {EventsData} from "@core/data/events";
import {EventsService} from "@core/services/events.service";
import {GalleryData} from "@core/data/galley";
import {GalleryService} from "@core/services/gallery.service";
import {PaymentsData} from "@core/data/payments";
import {PaymentsService} from "@core/services/payments.service";
import { PollData } from './data/poll';
import { PollService } from './services/poll.service';


const DATA_SERVICES = [
  {provide: EventsData, useClass: EventsService},
  {provide: GalleryData, useClass: GalleryService},
  {provide: PaymentsData, useClass: PaymentsService},
  {provide: PollData, useClass: PollService}
]


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {

    return {
      ngModule: CoreModule,
      providers: [
        ...DATA_SERVICES,
      ],
    };
  }
}
