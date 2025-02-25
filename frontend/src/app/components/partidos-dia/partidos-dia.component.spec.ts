import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosDiaComponent } from './partidos-dia.component';

describe('PartidosDiaComponent', () => {
  let component: PartidosDiaComponent;
  let fixture: ComponentFixture<PartidosDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidosDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidosDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
