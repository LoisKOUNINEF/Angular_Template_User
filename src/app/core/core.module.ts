import { NgModule } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { AuthService } from './services/auth/auth.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [SharedModule,
  ],
  providers: [
    ApiService,
    AuthService,
  ],
})
export class CoreModule { }
