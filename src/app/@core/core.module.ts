import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from "@angular/common";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {throwIfAlreadyLoaded} from "@core/guards/module-import-guard";

// services
import {EventsData} from "@core/data/events";
import {EventsService} from "@core/services/events.service";
import {GalleryData} from "@core/data/galley";
import {GalleryService} from "@core/services/gallery.service";
import {PaymentsData} from "@core/data/payments";
import {PaymentsService} from "@core/services/payments.service";
import { PollData } from './data/poll';
import { PollService } from './services/poll.service';
import { StorageService } from './services/storage.service';
import { AuthData } from './data/auth';
import { AuthService } from './services/auth.service';
import { AuthAppInterceptor } from './interceptors/auth.interceptor';
import { LiveData } from './data/live';
import { LiveService } from './services/live.service';

const DATA_SERVICES = [
  {provide: EventsData, useClass: EventsService},
  {provide: GalleryData, useClass: GalleryService},
  {provide: PaymentsData, useClass: PaymentsService},
  {provide: PollData, useClass: PollService},
  {provide: AuthData, useClass: AuthService},
  {provide: LiveData, useClass: LiveService},
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
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthAppInterceptor,
          multi: true
        },
        ...DATA_SERVICES,
        StorageService
      ],
    };
  }
}
