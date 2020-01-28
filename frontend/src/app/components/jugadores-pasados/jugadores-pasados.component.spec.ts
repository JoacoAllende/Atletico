import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresPasadosComponent } from './jugadores-pasados.component';

describe('JugadoresPasadosComponent', () => {
  let component: JugadoresPasadosComponent;
  let fixture: ComponentFixture<JugadoresPasadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresPasadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresPasadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
