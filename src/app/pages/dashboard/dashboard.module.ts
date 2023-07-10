import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "@app/pages/dashboard/dashboard-routing.module";
import {ThemeModule} from "@theme/theme.module";

import { HomeComponent } from './home/home.component';
import { SelectComponent } from './select/select.component';


// Components
const COMPONENTS: any = [
  HomeComponent,
  SelectComponent,
];


@NgModule({
  declarations: [DashboardComponent, ...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
