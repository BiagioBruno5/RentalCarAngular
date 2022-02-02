import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiModificaVeicoloComponent } from './aggiungi-modifica-veicolo.component';

describe('AggiungiModificaVeicoloComponent', () => {
  let component: AggiungiModificaVeicoloComponent;
  let fixture: ComponentFixture<AggiungiModificaVeicoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiModificaVeicoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiModificaVeicoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
