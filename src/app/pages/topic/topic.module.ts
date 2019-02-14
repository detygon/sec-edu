import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TopicComponent],
  imports: [
    CommonModule,
    TopicRoutingModule,
    SharedModule
  ]
})
export class TopicModule { }
