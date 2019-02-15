import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LessonRoutingModule } from './lesson-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LessonComponent],
  imports: [
    CommonModule,
    SharedModule,
    LessonRoutingModule,
    FormsModule
  ]
})
export class LessonModule { }
