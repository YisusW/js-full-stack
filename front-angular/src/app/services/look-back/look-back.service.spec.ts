import { TestBed } from '@angular/core/testing';

import { LookBackService } from './look-back.service';

describe('LookBackService', () => {
  let service: LookBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
