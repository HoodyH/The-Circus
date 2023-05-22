import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxEchartsModule} from 'ngx-echarts';
import {RouterModule} from "@angular/router";

// components
import {CountdownComponent} from './components/countdown/countdown.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {TimelineComponent} from './components/timeline/timeline.component';
import {PhoneInputComponent} from './components/phone-input/phone-input.component';
import {StaffComponent} from './components/staff/staff.component';
import {LocationComponent} from './components/location/location.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {PollChartComponent} from './components/poll-chart/poll-chart.component';

// directives

// pipes
import {CustomDatePipe} from "@theme/pipes/date.pipe";


const COMPONENTS: any = [
  CountdownComponent,
  FooterComponent,
  HeaderComponent,
  TimelineComponent,
  StaffComponent,
  LocationComponent,
  GalleryComponent,
  PhoneInputComponent,
  PollChartComponent,
];

const DIRECTIVES: any = [];

const PIPES: any = [
  CustomDatePipe
];


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
  ],
  entryComponents: [],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES, TimelineComponent, StaffComponent, LocationComponent, GalleryComponent],
})
export class ThemeModule {
}
