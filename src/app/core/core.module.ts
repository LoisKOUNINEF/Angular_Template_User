import { NgModule, Optional, SkipSelf } from '@angular/core';
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
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if(core) {
      throw new Error('Core module should be imported only in the root module.')
    }
  }
}
