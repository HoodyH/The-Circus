import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@core/guards/auth.guard";
import {DashboardComponent} from "./dashboard.component";
import {HomeComponent} from "./home/home.component";
import {SelectComponent} from './select/select.component';

const routes: Routes = [
  {
    path: 'select',
    component: SelectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'code/:id',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
