import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MiscellaneousComponent} from "@app/pages/miscellaneous/miscellaneous.component";
import {MiscellaneousRoutingModule} from "@app/pages/miscellaneous/miscellaneous-routing.module";


@NgModule({
  declarations: [
    MiscellaneousComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule
  ]
})
export class MiscellaneousModule { }
