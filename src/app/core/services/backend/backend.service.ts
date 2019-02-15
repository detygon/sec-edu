import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
/**
 * Mocks
 */
import { topics } from '../../mocks/topics.mocks';
import { sections } from '../../mocks/sections.mocks';
import { subscribes } from '../../mocks/subscribe.mocks';
import { certifications } from '../../mocks/certifications.mocks';

@Injectable()
export class BackendService implements  InMemoryDbService {
  /**
   * Create DB
   */
  createDb(reqInfo?): {} | Observable<{}> {
    return {
      topics,
      sections,
      subscribes,
      certifications
    };
  }
}
