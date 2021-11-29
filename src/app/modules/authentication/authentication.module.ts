import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationComponent} from './authentication.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {authenticationRouteing} from "./authentication.routing";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthorizationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    authenticationRouteing,
    MatInputModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
