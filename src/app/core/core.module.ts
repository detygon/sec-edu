import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './guard/module.guard';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './services/backend/backend.service';

@NgModule({
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(BackendService)
  ],
  exports: [],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        //
      ],
    };
  }
}
