import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InitComponent} from './init/init.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainRoutingModule} from '../main-routing/main-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    InitComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
  ],
  exports: [
    InitComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class EnterModule { }
