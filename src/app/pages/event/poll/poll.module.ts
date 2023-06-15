import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '@theme/theme.module';
import { PollRoutingModule } from './poll-routing.module';
import { PollComponent } from './poll.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PollResultsListComponent } from './poll-results-list/poll-results-list.component';
import { NoPollActiveComponent } from './no-poll-active/no-poll-active.component';



@NgModule({
  declarations: [PollComponent, PollResultsListComponent, NoPollActiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    PollRoutingModule,
  ]
})
export class PollModule { }
