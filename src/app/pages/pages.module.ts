import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TopicDetailComponent } from './topics/topic-detail/topic-detail.component';

@NgModule({
  declarations: [PagesComponent, TopicDetailComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
