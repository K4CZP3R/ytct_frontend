import { TestBed } from '@angular/core/testing';

import { ChannelSelectorService } from './channel-selector.service';

describe('ChannelSelectorService', () => {
  let service: ChannelSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
