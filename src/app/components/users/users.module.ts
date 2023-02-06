import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    EditUserComponent,
    UserDetailsComponent,
    UsersListComponent
  ],
  imports: [
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }
