import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    auth: any;
    subscription: Subscription = new Subscription;

    constructor(
        public router: Router,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        this.auth = this.authService;
    }

    logout() {
        return this.authService.logout()
        .subscribe(() => this.router.navigate(['/']));
    }

    ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
    }

}