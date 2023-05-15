import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from "@angular/common";
import {throwIfAlreadyLoaded} from "@core/module-import-guard";

// services
import {EventsData} from "@core/data/events";
import {EventsService} from "@core/services/events.service";


const DATA_SERVICES = [
  {provide: EventsData, useClass: EventsService},
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
