import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineButtonComponent } from './line-button.component';

describe('LineButtonComponent', () => {
  let component: LineButtonComponent;
  let fixture: ComponentFixture<LineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
