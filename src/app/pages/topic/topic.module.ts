import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

@NgModule({
  declarations: [TopicComponent, TopicDetailComponent],
  imports: [
    CommonModule,
    TopicRoutingModule
  ]
})
export class TopicModule { }
