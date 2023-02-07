import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UserDTO, UserFormValue } from 'src/app/core/dto/user.dto';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-send-reset-password-link',
  templateUrl: './send-reset-password-link.component.html',
  styleUrls: ['./send-reset-password-link.component.css']
})
export class SendResetPasswordLinkComponent {

  subscription: Subscription = new Subscription;

  pwdResetLinkForm = this.formBuilder.group({
    email: new FormControl('',[
      Validators.required,
      Validators.email])
  });

  controls = {
    email: this.pwdResetLinkForm.get('email'),
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() { }

  sendPwdResetLink() {
    if (this.pwdResetLinkForm.valid) {
      const user = new UserDTO(this.pwdResetLinkForm.value as UserFormValue);

      this.subscription = this.authService.sendPwdResetLink(user)
      .pipe(filter(res => !!res))
      .subscribe(() => {
        this.router.navigate(['auth/reset-link-success'])
      })
    };
    this.router.navigate(['auth/send-password-reset']);
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

}
