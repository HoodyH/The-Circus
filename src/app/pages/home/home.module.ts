import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ThemeModule} from "@theme/theme.module";
import {CoreModule} from "@core/core.module";
import {HomeRoutingModule} from "./home-routing.module";

// components
import {HomeComponent} from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ThemeModule,
  ],
})
export class HomeModule {
}
