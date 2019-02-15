import { Component, OnInit } from '@angular/core';
import {SubscribeService} from '../../core/services/subscribe/subscribe.service';
import {CertificationsService} from '../../core/services/certifications/certifications.service';

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

  /**
   * certifications
   */
  public certifications = [];

  constructor(
    private subscribeService: SubscribeService,
    private certificationService: CertificationsService) { }

  /**
   * Life cycle
   */
  ngOnInit() {
    this.showLoader = true;
    this.getSubscribe();
    this.getCertifications();
  }

  /**
   * Get subscribe
   */
  private getSubscribe() {
    this.subscribeService.getSubscribes().subscribe((res) => {
      this.subscribes = res;

      if (this.subscribes && this.certifications) {
        this.showLoader = false;
      }
    });
  }

  /**
   * Certifications
   */
  private getCertifications() {
    this.certificationService.getAllCertifications().subscribe((res) => {
      this.certifications = res;

      if (this.subscribes && this.certifications) {
        this.showLoader = false;
      }
    });
  }
}
