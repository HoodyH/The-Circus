import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from "./pages-routing.module";
import {PagesComponent} from "./pages.component";
import {ThemeModule} from "@theme/theme.module";
import {HomeModule} from "@app/pages/home/home.module";


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,
    HomeModule
  ],
})
export class PagesModule {
}
