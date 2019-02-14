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
export class CategoryService {
  /**
   * shelf endpoint
   */
  private categoryEndpoint = 'categories';

  /**
   * Category constructor
   */
  constructor(private apiService: ApiService) { }

  /**
   * Get all categories
   */
  getAllCategories(params?: any): Observable<any> {
    return this.apiService.get(`${this.categoryEndpoint}`, params).pipe(
      map((response: any) => response),
      catchError(error => throwError(error))
    );
  }

  /**
   * Get Category by ID
   */
  getCategory(categoryId: number, params?: any): Observable<any> {
    return this.apiService.get(`${this.categoryEndpoint}/${categoryId}`, params).pipe(
      map((response: any) => response),
      catchError(error => throwError(error))
    );
  }
}
