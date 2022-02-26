import { TestBed } from '@angular/core/testing';

import { InfoTorneoService } from './info-torneo.service';

describe('InfoTorneoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoTorneoService = TestBed.get(InfoTorneoService);
    expect(service).toBeTruthy();
  });
});
