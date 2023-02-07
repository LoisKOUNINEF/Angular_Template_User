import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User|undefined;
  auth: any;
  subscription: Subscription = new Subscription;

  constructor( 
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute 
    ) {}

  ngOnInit(): void {
    this.auth = this.authService;
    const email: string|null = this.route.snapshot.paramMap.get('email');
    if(email) {
      this.subscription = 
      this.userService.getOneByEmail(email).subscribe((user) => this.user = user)
    }
  }
  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
}
