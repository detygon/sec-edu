import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LessonRoutingModule } from './lesson-routing.module';

@NgModule({
  declarations: [LessonComponent],
  imports: [
    CommonModule,
    SharedModule,
    LessonRoutingModule
  ]
})
export class LessonModule { }
