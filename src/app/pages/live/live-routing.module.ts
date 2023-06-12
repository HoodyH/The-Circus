import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LiveComponent} from "./live.component";
import {DisplayAComponent} from "@app/pages/live/display-a/display-a.component";
import {DisplayBComponent} from "@app/pages/live/display-b/display-b.component";

const routes: Routes = [
  {
    path: '',
    component: LiveComponent,
    children: [
      {
        path: 'a',
        component: DisplayAComponent
      },
      {
        path: 'b',
        component: DisplayBComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveRoutingModule { }
