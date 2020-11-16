import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawLineButtonComponent } from './draw-line-button.component';

describe('DrawLineButtonComponent', () => {
  let component: DrawLineButtonComponent;
  let fixture: ComponentFixture<DrawLineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawLineButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawLineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
