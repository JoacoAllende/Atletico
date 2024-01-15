import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNoticiasComponent } from './carousel-noticias.component';

describe('CarouselNoticiasComponent', () => {
  let component: CarouselNoticiasComponent;
  let fixture: ComponentFixture<CarouselNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
