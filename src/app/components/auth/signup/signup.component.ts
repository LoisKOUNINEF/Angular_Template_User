import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { UserDTO, UserFormValue } from 'src/app/core/dto/user.dto';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  auth: any;
  subscription: Subscription = new Subscription;

  signupForm = this.formBuilder.group({
    email: new FormControl('',[
      Validators.required,
      Validators.email]),
    password: new FormControl('',[
      Validators.minLength(8)]),
  });

  controls = {
    email: this.signupForm.get('email'),
    password: this.signupForm.get('password'),
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() { this.auth = this.authService }

  signup() {
    if (this.signupForm.valid) {
      const user = new UserDTO(this.signupForm.value as UserFormValue);

      this.subscription = this.auth.signup(user)
      .pipe(filter(res => !!res))
      .subscribe((res: User) => {
        this.auth.login(user)
        .subscribe(() => {
          this.router.navigate([''])
        }) 
      })
    };
    
    this.router.navigate(['auth/signup']);
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
  
}
