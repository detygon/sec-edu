import {Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LessonService } from 'src/app/core/services/lesson/lesson.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, AfterViewInit {

  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;

  responses: any;
  lesson;
  hasSuccedded: boolean;
  loader = false;


  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService,
  ) { }

  ngOnInit() {
    this.loader = true;

    this.route.paramMap.subscribe((params: ParamMap) => {
      const sectionId = params.get('section');

      this.lessonService.getLesson(+sectionId).subscribe(res => {
        this.lesson = res.question;
        const responseUser = localStorage.getItem('response');
        this.responses = (responseUser === 'yes');
        this.hasSuccedded = (responseUser === 'yes');
      });
    });

    const responseUserN = localStorage.getItem('response');
    this.hasSuccedded = (responseUserN === 'yes');

    this.isSubmissionSuccessful();
  }

  ngAfterViewInit() {
    //
  }

  isSubmissionSuccessful() {
    setTimeout(() => {
      this.loader = false;
    });
  }
}
