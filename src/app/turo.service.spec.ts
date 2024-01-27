import { TestBed } from '@angular/core/testing';

import { TuroService } from './turo.service';

describe('TuroService', () => {
  let service: TuroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
