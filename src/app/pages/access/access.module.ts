import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AccessComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccessRoutingModule,
  ]
})
export class AccessModule { }
