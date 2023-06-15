import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MiscellaneousComponent} from "@app/pages/miscellaneous/miscellaneous.component";
import {PageNotFoundComponent} from "@app/pages/miscellaneous/page-not-found/page-not-found.component";
import {BlankComponent} from "@app/pages/miscellaneous/blank/blank.component";
import {EventNotFoundComponent} from "@app/pages/miscellaneous/event-not-found/event-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousComponent,
    children: [
      {
        path: '404',
        component: PageNotFoundComponent
      },
      {
        path: 'no-event',
        component: EventNotFoundComponent
      },
      {
        path: 'blank',
        component: BlankComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingModule { }
