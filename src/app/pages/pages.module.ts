import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from "./pages-routing.module";
import {PagesComponent} from "./pages.component";
import {ThemeModule} from "@theme/theme.module";
import {SplashModule} from "@app/pages/splash/splash.module";
import {EventComponent} from './event/event.component';
import {UserModule} from "@app/pages/user/user.module";


@NgModule({
  declarations: [PagesComponent, EventComponent],
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,
    SplashModule,
    UserModule,
  ],
})
export class PagesModule {
}
