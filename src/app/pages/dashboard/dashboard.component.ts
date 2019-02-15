import { Component, OnInit } from '@angular/core';
import {SubscribeService} from '../../core/services/subscribe/subscribe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  subscribes = [];

  /**
   * Show loader
   */
  public showLoader = false;

  constructor(private subscribeService: SubscribeService) { }

  ngOnInit() {
    this.showLoader = true;
    this.getSubscribe();
  }

  private getSubscribe() {
    this.subscribeService.getSubscribes().subscribe((res) => {
      this.subscribes = res;

      if (this.subscribes) {
        this.showLoader = false;
      }
    });
  }
}
