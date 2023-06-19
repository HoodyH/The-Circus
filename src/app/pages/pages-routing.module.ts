import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@core/guards/auth.guard";
import {SplashComponent} from "@app/pages/splash/splash.component";

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then(m => m.AccessModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'live',
    canActivate: [AuthGuard],
    loadChildren: () => import('./live/live.module').then(m => m.LiveModule),
  },
  {
    path: 'black-hole',
    loadChildren: () => import('./miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule),
  },
  {
    path: '',
    loadChildren: () => import('./event/event.module').then(m => m.EventModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
