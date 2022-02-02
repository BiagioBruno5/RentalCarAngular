import { TestBed } from '@angular/core/testing';

import { GetListaUtentiMockService } from './get-lista-utenti-mock.service';

describe('GetListaUtentiMockService', () => {
  let service: GetListaUtentiMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListaUtentiMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
