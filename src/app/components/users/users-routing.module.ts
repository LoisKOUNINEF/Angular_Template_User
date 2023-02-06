import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const usersRoutes: Routes = []

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
