import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from "@theme/theme.module";
import {LiveRoutingModule} from "@app/pages/live/live-routing.module";

// Components
import {LiveComponent} from "./live.component";
import { DisplayAComponent } from './display-a/display-a.component';
import { DisplayBComponent } from './display-b/display-b.component';


@NgModule({
  declarations: [
    LiveComponent,
    DisplayAComponent,
    DisplayBComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    LiveRoutingModule,
  ]
})
export class LiveModule { }
