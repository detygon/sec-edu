import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html'
})
export class CourseCardComponent implements OnInit {

  @Input() subscribes = [];

  constructor() { }

  ngOnInit() {
  }
}
