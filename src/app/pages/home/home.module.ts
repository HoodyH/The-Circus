import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ThemeModule} from "@theme/theme.module";

// components
import {HomeComponent} from './home.component';
import {TimelineComponent} from "./timeline/timeline.component";
import {StaffComponent} from "./staff/staff.component";
import {LocationComponent} from "@app/pages/home/location/location.component";


const COMPONENTS: any = [
  HomeComponent,
  TimelineComponent,
  StaffComponent,
  LocationComponent,
]


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ],
  exports: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
