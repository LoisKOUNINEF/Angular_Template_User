import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDTO, UserFormValue } from 'src/app/core/dto/user.dto';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  @Input() user: User | undefined;
  subscription: Subscription = new Subscription;

  userForm = this.formBuilder.group({
    isAdmin: new FormControl(''),
  });

  constructor( 
    private formBuilder: FormBuilder,
    private userService: UserService, 
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    const userEmail = this.route.snapshot.paramMap.get('email');
    if (userEmail) {
    this.subscription = this.userService.getOneByEmail(userEmail).subscribe(user => this.user = user)
    } else {
      this.user = undefined;
    }
  }

  onSubmit() {
    const user = new UserDTO(this.userForm.value as UserFormValue)
    this.update(user)
  }

  update(user: UserDTO) {
    if(this.user) {
      this.userService.update(user, this.user.id!)
      .subscribe(() => {
        this.router.navigate(['users/admin/users-list'])
      })
    }
  }

  delete(user: User) {
    if(this.user) {
      this.userService.delete(user.id!)
      .subscribe(() => {
        this.router.navigate(['users/admin/users-list'])
      });
    }
  }

  ngOnDestroy() { 
    if(this.subscription) this.subscription.unsubscribe() 
  }

}
