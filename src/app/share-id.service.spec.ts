import { TestBed } from '@angular/core/testing';

import { ShareIdService } from './share-id.service';

describe('ShareIdService', () => {
  let service: ShareIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
