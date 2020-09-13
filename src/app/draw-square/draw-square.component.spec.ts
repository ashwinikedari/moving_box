import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawSquareComponent } from './draw-square.component';

describe('DrawSquareComponent', () => {
  let component: DrawSquareComponent;
  let fixture: ComponentFixture<DrawSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
