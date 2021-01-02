import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearRunLinesButtonComponent } from './clear-run-lines-button.component';

describe('ClearRunLinesButtonComponent', () => {
  let component: ClearRunLinesButtonComponent;
  let fixture: ComponentFixture<ClearRunLinesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearRunLinesButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearRunLinesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
