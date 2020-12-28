import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPolygonButtonComponent } from './draw-polygon-button.component';

describe('DrawPolygonButtonComponent', () => {
  let component: DrawPolygonButtonComponent;
  let fixture: ComponentFixture<DrawPolygonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawPolygonButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPolygonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
