import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

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
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule { }
