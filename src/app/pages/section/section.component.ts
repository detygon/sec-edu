import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TopicService} from '../../core/services/topic/topic.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  /**
   * topic slug
   */
  private topicSlug = null;

  /**
   * Topic id
   */
  topic = {};

  /**
   * Sub
   */
  private sub: any;

  /**
   * Section constructor
   */
  constructor(private route: ActivatedRoute, private topicService: TopicService) { }

  /**
   * Life cycle
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.topicSlug = params['topic'];
    });

    this.getTopics();
  }

  /**
   * Get topic
   */
  private getTopics() {
    this.topicService.getAllTopics({
      slug: this.topicSlug
    }).subscribe((res) => {
      const topicSearch = res.filter((q) => q.slug === this.topicSlug);

      this.topic = topicSearch[0];
    });
  }
}
