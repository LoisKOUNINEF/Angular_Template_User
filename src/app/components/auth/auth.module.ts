import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetLinkSuccessComponent } from './reset-link-success/reset-link-success.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SendResetPasswordLinkComponent } from './send-reset-password-link/send-reset-password-link.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetLinkSuccessComponent,
    ResetPasswordComponent,
    SendResetPasswordLinkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
