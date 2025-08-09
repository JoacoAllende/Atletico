import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloTorneoComponent } from './titulo-torneo.component';

describe('TituloTorneoComponent', () => {
  let component: TituloTorneoComponent;
  let fixture: ComponentFixture<TituloTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloTorneoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
