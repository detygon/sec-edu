import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/core/services/lesson/lesson.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  public lesson;
  public sectionName: string;
  public sectionId: number;
  public initiationDone = false;

  public showLoader = false;

  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute,
    private router: Router
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
        this.sectionId = res.id;

        if (this.lesson) {
          this.showLoader = false;
        }
      });
    });
  }

  handleVideoEnded() {
    this.initiationDone = true;
  }

  handleFormSubmit(form: NgForm) {
    localStorage.setItem(this.sectionId.toString(), JSON.stringify(form.value));
    this.router.navigate(['../results'], { relativeTo: this.route });
  }
}
