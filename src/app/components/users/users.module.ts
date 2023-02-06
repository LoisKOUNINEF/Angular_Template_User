import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule, Routes } from '@angular/router';

const usersRoutes: Routes = [];

@NgModule({
  declarations: [
    EditUserComponent,
    UserDetailsComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ]
})
export class UsersModule { }
