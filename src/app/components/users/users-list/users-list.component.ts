import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import sorting from 'src/app/shared/helpers/sorting.helper';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  subscription: Subscription = new Subscription;

  constructor( private userService: UserService ) {}

  ngOnInit(): void {
      this.subscription = this.userService.getAll().subscribe(user => this.users = sorting(user, 'email'))
  }

  ngOnDestroy() { 
    if(this.subscription) this.subscription.unsubscribe() 
  }

}
