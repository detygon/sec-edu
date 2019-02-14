import { Component, OnInit } from '@angular/core';
import {TopicService} from '../../core/services/topic/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html'
})
export class TopicComponent implements OnInit {
  public topics = [];
  /**
   * Constructor topic
   */
  constructor(private topicService: TopicService) { }

  /**
   * Lifecycle init
   */
  ngOnInit() {
    this.getTopics();
  }

  /**
   * Get topics
   */
  private getTopics() {
    this.topicService.getAllTopics().subscribe((res) => {
      console.log(res);
      this.topics = res;
    });
  }
}
