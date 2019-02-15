import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderLinkDirective } from './directives/header-link/header-link.directive';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { MatTabsModule } from '@angular/material';
import { CourseCardComponent } from './components/course-card/course-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LoaderComponent,
    MatTabsModule,
    CourseCardComponent
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HeaderLinkDirective,
    LoaderComponent,
    CourseCardComponent
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
