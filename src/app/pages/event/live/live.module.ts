import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live.component';
import {LiveRoutingModule} from "@app/pages/event/live/live-routing.module";
import {ThemeModule} from "@theme/theme.module";



@NgModule({
  declarations: [
    LiveComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    LiveRoutingModule
  ]
})
export class LiveModule { }
