import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SendResetPasswordLinkComponent } from './send-reset-password-link/send-reset-password-link.component';
import { ResetLinkSuccessComponent } from './reset-link-success/reset-link-success.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'send-password-reset', component: SendResetPasswordLinkComponent },
  {path: 'reset-link-success', component: ResetLinkSuccessComponent },
  {path: 'reset-password/:token', component: ResetPasswordComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
