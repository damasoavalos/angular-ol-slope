import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { OuterRingButtonComponent } from './outer-ring-button.component'

describe('OuterRingButtonComponent', () => {
  let component: OuterRingButtonComponent
  let fixture: ComponentFixture<OuterRingButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OuterRingButtonComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterRingButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
