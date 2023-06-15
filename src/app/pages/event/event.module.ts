import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from "@theme/theme.module";
import {EventRoutingModule} from "@app/pages/event/event-routing.module";
import {HomeModule} from "@app/pages/event/home/home.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThemeModule,
    EventRoutingModule,
    HomeModule,
  ]
})
export class EventModule { }
