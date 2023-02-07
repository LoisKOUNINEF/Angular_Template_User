import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const usersRoutes: Routes = [
  {path: 'users', canActivate: [AuthGuard], children: [
    {path: 'edit-user', component: EditUserComponent},
    {path: 'user-details/:email', component: UserDetailsComponent},
    {path: 'admin', canActivate: [AdminGuard], children: [
      {path: 'users-list', component: UsersListComponent}
    ]}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
