import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SectionService } from '../../core/services/section/section.service';
import { trigger, transition, style, state, useAnimation } from '@angular/animations';
import { slideInDown, slideInUp } from 'ng-animate';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  animations: [
    trigger('bounce', [
      state('open', style({
        display: 'flex'
      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open => closed', [useAnimation(slideInDown, {
        params: { timing: 1 }
      })]),
      transition('closed => open', [useAnimation(slideInUp, {
        params: { timing: 0.5 }
      })]),
    ]),
  ],
})
export class LessonComponent implements OnInit {

  bounce: any;

  /**
   * lesson
   */
  public lesson;

  /**
   * SectionName
   */
  public sectionName: string;

  /**
   *
   */
  public initiationDone = false;

  /**
   *
   */
  public showLoader = false;

  /**
   *
   */
  public sectionId: number;

  /**
   *
   */
  private stub: any;

  /**
   * Lesson constructor
   */
  constructor(
    private sectionService: SectionService,
    private route: ActivatedRoute,
    private router: Router) {}

  /**
   * Life cycle
   */
  ngOnInit() {
    this.showLoader = true;

    this.stub = this.route.paramMap.subscribe((params: ParamMap) => {
      this.sectionId = +params.get('section');
    });

    this.getLesson();
  }

  /**
   * Get lesson
   */
  private getLesson() {
    this.sectionService.getSection(this.sectionId).subscribe(res => {
      this.lesson = res.question;
      this.sectionName = res.name;

      if (this.lesson) {
        this.showLoader = false;
      }
    });
  }

  /**
   * Handle video End
   */
  handleVideoEnded() {
    this.initiationDone = true;
  }

  /**
   * handle from  submit
   */
  handleFormSubmit(form: NgForm) {
    localStorage.setItem('responses', form.value.risques);
    this.router.navigate(['../results'], { relativeTo: this.route });
  }

  closeModal() {
    this.initiationDone = false;
  }
}
