import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MiscellaneousComponent} from "@app/pages/miscellaneous/miscellaneous.component";
import {PageNotFoundComponent} from "@app/pages/miscellaneous/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousComponent,
    children: [
      {
        path: '404',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingModule { }
