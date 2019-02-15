import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LessonService } from 'src/app/core/services/lesson/lesson.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  responses: any;
  lesson;
  hasSuccedded: boolean;

  constructor(private route: ActivatedRoute,
              private lessonService: LessonService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const sectionId = params.get('section');
      this.responses = JSON.parse(localStorage.getItem(sectionId)) || {};
      this.lessonService.getLesson(+sectionId).subscribe(res => this.lesson = res.question);
    });

    this.hasSuccedded = this.isSubmissionSuccessful();
  }

  isSubmissionSuccessful() {
    return this.responses.risques;
  }
}
