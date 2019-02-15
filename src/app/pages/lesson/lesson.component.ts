import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SectionService } from '../../core/services/section/section.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
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
    localStorage.setItem(this.sectionId.toString(), JSON.stringify(form.value));
    this.router.navigate(['../results'], { relativeTo: this.route });
  }
}
