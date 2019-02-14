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
export class TopicService {
  /**
   * shelf endpoint
   */
  private topicEndpoint = 'topics';

  /**
   * Topic constructor
   */
  constructor(private apiService: ApiService) { }

  /**
   * Get all topics
   */
  getAllTopics(params?: any): Observable<any> {
    return this.apiService.get(`${this.topicEndpoint}`, params).pipe(
      map((response: any) => response),
      catchError(error => throwError(error))
    );
  }

  /**
   * Get Topic by ID
   */
  getTopic(topicId: number, params?: any): Observable<any> {
    return this.apiService.get(`${this.topicEndpoint}/${topicId}`, params).pipe(
      map((response: any) => response),
      catchError(error => throwError(error))
    );
  }
}
