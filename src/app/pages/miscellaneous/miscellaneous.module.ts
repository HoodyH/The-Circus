import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from "@theme/theme.module";
import {MiscellaneousRoutingModule} from "@app/pages/miscellaneous/miscellaneous-routing.module";
import {MiscellaneousComponent} from "@app/pages/miscellaneous/miscellaneous.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    MiscellaneousComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    MiscellaneousRoutingModule
  ]
})
export class MiscellaneousModule { }
