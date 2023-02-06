import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class UsersModule { }
