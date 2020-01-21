import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VallaInvictaComponent } from './valla-invicta.component';

describe('VallaInvictaComponent', () => {
  let component: VallaInvictaComponent;
  let fixture: ComponentFixture<VallaInvictaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VallaInvictaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VallaInvictaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
