import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {AuthGuard} from "@core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
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
        path: 'access',
        loadChildren: () => import('./access/access.module').then(m => m.AccessModule),
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
