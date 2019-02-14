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
export class SectionService {
  /**
   * shelf endpoint
   */
  private sectionEndpoint = 'categories';

  /**
   * Section constructor
   */
  constructor(private apiService: ApiService) { }

  /**
   * Get all sections
   */
  getAllSections(params?: any): Observable<any> {
    return this.apiService.get(`${this.sectionEndpoint}`, params).pipe(
      map((response: any) => response),
      catchError(error => throwError(error))
    );
  }

  /**
   * Get section by ID
   */
  getSection(sectionId: number, params?: any): Observable<any> {
    return this.apiService.get(`${this.sectionEndpoint}/${sectionId}`, params).pipe(
      map((response: any) => response),
      catchError(error => throwError(error))
    );
  }
}
