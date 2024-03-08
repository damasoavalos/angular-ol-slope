import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerSwipeComponent } from './layer-swipe.component';

describe('LayerSwipeComponent', () => {
  let component: LayerSwipeComponent;
  let fixture: ComponentFixture<LayerSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerSwipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayerSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
