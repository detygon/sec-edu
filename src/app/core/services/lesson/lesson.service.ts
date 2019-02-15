import { Injectable } from '@angular/core';
import { SectionService } from '../section/section.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private sectionService: SectionService) { }

  getLesson(sectionId: number, params?: any) {
    return this.sectionService.getSection(sectionId, params);
  }
}
