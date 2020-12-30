import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterRingComponent } from './outer-ring.component';

describe('OuterRingComponent', () => {
  let component: OuterRingComponent;
  let fixture: ComponentFixture<OuterRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterRingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
