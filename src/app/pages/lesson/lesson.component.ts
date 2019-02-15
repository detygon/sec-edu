import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/core/services/lesson/lesson.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  public lesson;
  public sectionName: string;

  public showLoader = false;

  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.showLoader = true;
    this.getLesson();
  }

  getLesson() {
    return this.route.paramMap.subscribe((params: ParamMap) => {
      this.lessonService.getLesson(+params.get('section')).subscribe(res => {
        this.lesson = res.question;
        this.sectionName = res.name;

        if (this.lesson) {
          this.showLoader = false;
        }
      });
    });
  }

  handleVideoEnded() {
    console.log('The video is ended');
  }
}
