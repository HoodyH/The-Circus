import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@core/guards/auth.guard";
import {EventComponent} from "./event.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: ':id',
    component: EventComponent,
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
export class EventRoutingModule {
}
