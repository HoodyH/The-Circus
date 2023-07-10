import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@core/guards/auth.guard";
import {UserComponent} from "@app/pages/user/user.component";
import {MeComponent} from "@app/pages/user/me/me.component";
import {SpotifyCallbackComponent} from "@app/pages/user/spotify-callback/spotify-callback.component";
import {FirstSetupComponent} from "@app/pages/user/first-setup/first-setup.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: MeComponent,
      },
      {
        path: 'spotify-callback',
        component: SpotifyCallbackComponent,
      },
      {
        path: 'setup',
        component: FirstSetupComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
