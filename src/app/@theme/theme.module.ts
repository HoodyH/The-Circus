import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxEchartsModule} from 'ngx-echarts';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// directives

// pipes
import {CustomDatePipe} from "@theme/pipes/date.pipe";


// components
import {CountdownComponent} from './components/countdown/countdown.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {PollChartComponent} from './components/poll-chart/poll-chart.component';
import {LoadingAnimationComponent} from './components/loading-animation/loading-animation.component';
import {SpotifyPlaylistComponent} from './components/spotify-playlist/spotify-playlist.component';
import {MeteoStatusComponent} from './components/meteo-status/meteo-status.component';
import {CurrentStatusComponent} from './components/current-status/current-status.component';
import {ActivityComponent} from './components/activity/activity.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {NowPlayingComponent} from "./components/now-playing/now-playing.component";
import {CarouselComponent} from './components/carousel/carousel.component';


const COMPONENTS: any = [
  CountdownComponent,
  FooterComponent,
  HeaderComponent,
  GalleryComponent,
  PollChartComponent,
  LoadingAnimationComponent,
  SpotifyPlaylistComponent,
  MeteoStatusComponent,
  ActivityComponent,
  CurrentStatusComponent,
  DropdownComponent,
  NowPlayingComponent,
  CarouselComponent
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
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
  ],
  entryComponents: [],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
})
export class ThemeModule {
}
