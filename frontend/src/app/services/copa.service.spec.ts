import { TestBed } from '@angular/core/testing';

import { CopaService } from './copa.service';

describe('CopaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CopaService = TestBed.get(CopaService);
    expect(service).toBeTruthy();
  });
});
