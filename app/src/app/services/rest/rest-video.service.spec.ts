import { TestBed } from '@angular/core/testing';

import { RestVideoService } from './rest-video.service';

describe('RestVideoService', () => {
  let service: RestVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
