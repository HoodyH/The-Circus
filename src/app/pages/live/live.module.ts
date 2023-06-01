import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from "@theme/theme.module";
import {LiveRoutingModule} from "@app/pages/live/live-routing.module";

// Components
import {LiveComponent} from "./live.component";
import {NowPlayingComponent} from "./now-playing/now-playing.component";
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    LiveComponent,
    NowPlayingComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    LiveRoutingModule,
  ]
})
export class LiveModule { }
