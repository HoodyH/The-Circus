import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "@app/pages/dashboard/dashboard-routing.module";
import {ThemeModule} from "@theme/theme.module";

import { HomeComponent } from './home/home.component';

// Components
const COMPONENTS: any = [
  HomeComponent
];


@NgModule({
  declarations: [DashboardComponent, ...COMPONENTS],
  imports: [
    CommonModule,
    ThemeModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
