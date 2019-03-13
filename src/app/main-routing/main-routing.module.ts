import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InitComponent} from '../enter/init/init.component';
import {LoginComponent} from '../enter/login/login.component';
import {RegisterComponent} from '../enter/register/register.component';

const routes: Routes = [
  {path: 'enter', component: InitComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
