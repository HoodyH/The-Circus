import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '@app/@theme/theme.module';
import { PollRoutingModule } from './poll-routing.module';
import { PollComponent } from './poll.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [PollComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    PollRoutingModule,
  ]
})
export class PollModule { }
