import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AuthGuard} from "@core/guards/auth.guard";
import {HomeComponent} from "@app/pages/home/home.component";
import {SplashComponent} from "@app/pages/splash/splash.component";

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'black-hole',
    loadChildren: () => import('./miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule),
  },
  {
    path: ':id',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'pay',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule),
      },
      {
        path: 'poll',
        canActivate: [AuthGuard],
        loadChildren: () => import('./poll/poll.module').then(m => m.PollModule),
      },
      {
        path: 'gallery',
        canActivate: [AuthGuard],
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
