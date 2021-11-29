import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./components/registration/registration.component";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {AuthenticationComponent} from "./authentication.component";

const routes: Routes = [
  {path: '', component: AuthenticationComponent, children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'authorization', component: AuthorizationComponent}
    ]},
];

export const authenticationRouteing = RouterModule.forChild(routes);
