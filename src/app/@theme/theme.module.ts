import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// components
import {CountdownComponent} from './components/countdown/countdown.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {TimelineComponent} from './components/timeline/timeline.component';

// directives

// pipes
import {CustomDatePipe} from "@theme/pipes/date.pipe";


const COMPONENTS: any = [
  CountdownComponent,
  FooterComponent,
  HeaderComponent,
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
    TimelineComponent,
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES, TimelineComponent],
})
export class ThemeModule {
}
