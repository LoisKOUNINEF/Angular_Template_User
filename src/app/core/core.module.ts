import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api/api.service';
import { AuthService } from './services/auth/auth.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    ApiService,
    AuthService,
  ],
})
export class CoreModule { }
