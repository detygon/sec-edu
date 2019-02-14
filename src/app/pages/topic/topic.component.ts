import { Component, OnInit } from '@angular/core';
import {TopicService} from '../../core/services/topic/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html'
})
export class TopicComponent implements OnInit {
  /**
   * Topics
   */
  public topics = [];

  /**
   * Show loader
   */
  public showLoader = false;

  /**
   * Constructor topic
   */
  constructor(private topicService: TopicService) { }

  /**
   * Lifecycle init
   */
  ngOnInit() {
    this.showLoader = true;
    this.getTopics();
  }

  /**
   * Get topics
   */
  private getTopics() {
    this.topicService.getAllTopics().subscribe((res) => {
      this.topics = res;

      if (this.topics) {
        this.showLoader = false;
      }
    });
  }
}
