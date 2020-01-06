import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoleadorComponent } from './goleador.component';

describe('GoleadorComponent', () => {
  let component: GoleadorComponent;
  let fixture: ComponentFixture<GoleadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoleadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
