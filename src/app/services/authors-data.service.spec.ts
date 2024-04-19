import { TestBed } from '@angular/core/testing';

import { AuthorsDataServiceService } from './authors-data.service';

describe('AuthorsDataServiceService', () => {
  let service: AuthorsDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
