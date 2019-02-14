import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from '../../core/services/topic/topic.service';

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
  public topic;

  /**
   * Show loader
   */
  public showLoader = false;

  /**
   * Sub
   */
  private sub: any;

  /**
   * Section constructor
   */
  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private router: Router) { }

  /**
   * Life cycle
   */
  ngOnInit() {
    this.showLoader = true;

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

      if (this.topic) {
        this.showLoader = false;
      }
    });
  }

  /**
   * HostListener event
   */
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.router.navigate(['/topics']);
    }
  }
}
