import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import {ThemeModule} from "@theme/theme.module";


@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    ThemeModule,
  ],
  exports: [SplashComponent],
  bootstrap: [SplashComponent]
})
export class SplashModule { }
