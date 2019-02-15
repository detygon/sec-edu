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
export class CertificationsService {
  /**
   * shelf endpoint
   */
  private certificationEndpoint = 'certifications';

  /**
   * Section constructor
   */
  constructor(private apiService: ApiService) { }

  /**
   * Get all certifications
   */
  getAllCertifications(params?: any): Observable<any> {
    return this.apiService.get(`${this.certificationEndpoint}`, params).pipe(
      map((response: any) => response),
      catchError(error => throwError(error))
    );
  }

  /**
   * Get certification by ID
   */
  getCertification(certificationId: number, params?: any): Observable<any> {
    return this.apiService.get(`${this.certificationEndpoint}/${certificationId}`, params).pipe(
      map((response: any) => response),
      catchError(error => throwError(error))
    );
  }
}
