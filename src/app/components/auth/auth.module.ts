import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetLinkSuccessComponent } from './reset-link-success/reset-link-success.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SendResetPasswordLinkComponent } from './send-reset-password-link/send-reset-password-link.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'send-password-reset', component: SendResetPasswordLinkComponent },
  {path: 'reset-link-success', component: ResetLinkSuccessComponent },
  {path: 'reset-password/:token', component: ResetPasswordComponent },
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetLinkSuccessComponent,
    ResetPasswordComponent,
    SendResetPasswordLinkComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
