import { TestBed } from '@angular/core/testing';

import { GetParcoVeicoliMockService } from './get-parco-veicoli-mock.service';

describe('GetParcoVeicoliMockService', () => {
  let service: GetParcoVeicoliMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetParcoVeicoliMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
