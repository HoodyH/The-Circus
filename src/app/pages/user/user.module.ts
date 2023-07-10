import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {SpotifyCallbackComponent} from './spotify-callback/spotify-callback.component';
import {MeComponent} from './me/me.component';
import {UserRoutingModule} from "@app/pages/user/user-routing.module";
import {ThemeModule} from "@theme/theme.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FirstSetupComponent } from './first-setup/first-setup.component';


@NgModule({
  declarations: [
    UserComponent,
    SpotifyCallbackComponent,
    MeComponent,
    FirstSetupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    UserRoutingModule
  ],
})
export class UserModule {
}
