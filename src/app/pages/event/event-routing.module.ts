import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@app/pages/home/home.component";
import {EventComponent} from "@app/pages/event/event.component";

const routes: Routes = [
  {
    path: ':id',
    component: EventComponent,
    children: [
      {
        path: '',
        component: HomeComponent
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
