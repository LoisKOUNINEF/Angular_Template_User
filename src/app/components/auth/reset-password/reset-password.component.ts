import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UserDTO, UserFormValue } from 'src/app/core/dto/user.dto';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  token: string = '';
  subscription: Subscription = new Subscription;

  pwdResetForm = this.formBuilder.group({
    password: [''],
  });

  controls = {
    password: this.pwdResetForm.get('password'),
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() { this.token = this.route.snapshot.params['token'] }

  resetPwd() {
    if (this.pwdResetForm.valid) {
      const user = new UserDTO(this.pwdResetForm.value as UserFormValue);
      
      this.subscription = this.authService.resetPwd(user, this.token)
      .pipe(filter(res => !!res))
      .subscribe(() => {
        this.router.navigate(['login'])
      })
    };
    this.router.navigate([`reset-password/${this.token}`]);
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
  
}
