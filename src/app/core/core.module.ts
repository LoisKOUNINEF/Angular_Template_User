import { NgModule } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
  ],
  providers: [
    ApiService,
  ],
})
export class CoreModule { }
