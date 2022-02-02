import { TestBed } from '@angular/core/testing';

import { GetPrenotazioneMockService } from './get-prenotazione-mock.service';

describe('GetPrenotazioneMockService', () => {
  let service: GetPrenotazioneMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPrenotazioneMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
