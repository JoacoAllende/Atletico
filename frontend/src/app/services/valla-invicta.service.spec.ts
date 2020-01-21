import { TestBed } from '@angular/core/testing';

import { VallaInvictaService } from './valla-invicta.service';

describe('VallaInvictaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VallaInvictaService = TestBed.get(VallaInvictaService);
    expect(service).toBeTruthy();
  });
});
