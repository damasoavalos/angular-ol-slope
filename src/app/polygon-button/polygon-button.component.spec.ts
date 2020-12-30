import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonButtonComponent } from './polygon-button.component';

describe('PolygonButtonComponent', () => {
  let component: PolygonButtonComponent;
  let fixture: ComponentFixture<PolygonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolygonButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
