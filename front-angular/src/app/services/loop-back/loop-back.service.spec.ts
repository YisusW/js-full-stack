import { TestBed } from '@angular/core/testing';

import { LoopBackService } from './loop-back.service';

describe('LoopBackService', () => {
  let service: LoopBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoopBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
