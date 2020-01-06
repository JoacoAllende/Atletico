import { TestBed } from '@angular/core/testing';

import { GoleadorService } from './goleador.service';

describe('GoleadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoleadorService = TestBed.get(GoleadorService);
    expect(service).toBeTruthy();
  });
});
