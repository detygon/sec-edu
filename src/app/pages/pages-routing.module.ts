import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'topics', loadChildren: './topic/topic.module#TopicModule' },
  { path: 'topics/:topic/sections', loadChildren: './section/section.module#SectionModule' },
  { path: 'topics/:topic/sections/:section/learn', loadChildren: './lesson/lesson.module#LessonModule' },
  { path: 'topics/:topic/sections/:section/results', loadChildren: './result/result.module#ResultModule' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
