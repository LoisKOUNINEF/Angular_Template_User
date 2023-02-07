import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDTO, UserFormValue } from 'src/app/core/dto/user.dto';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: any;
  subscription: Subscription = new Subscription;

  loginForm = this.formBuilder.group({
    email: new FormControl('',[
      Validators.required,
      Validators.email]),
    password: [''],
  });

  controls = {
    email: this.loginForm.get('email'),
    password: this.loginForm.get('password'),
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() { this.auth = this.authService }

  login() {
    if (this.loginForm.valid) {
      const user = new UserDTO(this.loginForm.value as UserFormValue);

      this.subscription = this.auth.login(user)
      .subscribe((res: User) => {
        if (this.authService.isAdmin) {
          this.router.navigate(['users/admin/users-list'])
        } else {
        this.router.navigate([''])
        }
      })
    };
    this.router.navigate(['auth/login']);
  }
  
  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
  
}
