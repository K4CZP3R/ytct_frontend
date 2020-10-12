import { TestBed } from '@angular/core/testing';

import { RestAuthService } from './rest-auth.service';

describe('RestAuthService', () => {
  let service: RestAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
