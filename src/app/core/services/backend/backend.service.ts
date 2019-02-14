import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { categories } from '../../mocks/categories.mocks';
import { sections } from '../../mocks/sections.mocks';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements  InMemoryDbService {
  /**
   * Create DB
   */
  createDb(reqInfo?): {} | Observable<{}> {
    return {
      categories,
      sections
    };
  }
}
