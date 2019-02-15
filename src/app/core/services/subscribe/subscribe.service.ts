import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
/**
 * Rxjs
 */
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  /**
   * shelf endpoint
   */
  private subscribeEndpoint = 'subscribes';

  /**
   * Section constructor
   */
  constructor(private apiService: ApiService) { }

  /**
   * Get all sections
   */
  getSubscribes(params?: any): Observable<any> {
    return this.apiService.get(`${this.subscribeEndpoint}`, params).pipe(
      map((response: any) => response),
      catchError(error => throwError(error))
    );
  }
}
