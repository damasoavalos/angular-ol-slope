import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawOuterRingComponent } from './draw-outer-ring.component';

describe('DrawOuterRingComponent', () => {
  let component: DrawOuterRingComponent;
  let fixture: ComponentFixture<DrawOuterRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawOuterRingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawOuterRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
