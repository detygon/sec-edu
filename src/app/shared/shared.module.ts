import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderLinkDirective } from './directives/header-link/header-link.directive';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { MatTabsModule, MatProgressSpinnerModule } from '@angular/material';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CertificateCardComponent } from './components/certificate-card/certificate-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LoaderComponent,
    MatTabsModule,
    CourseCardComponent,
    MatProgressSpinnerModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HeaderLinkDirective,
    LoaderComponent,
    CourseCardComponent,
    CertificateCardComponent
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        //
      ],
    };
  }
}
