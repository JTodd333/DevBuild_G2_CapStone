import { TestBed } from '@angular/core/testing';

import { PetrxviewService } from './petrxview.service';

describe('PetrxviewService', () => {
  let service: PetrxviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetrxviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
