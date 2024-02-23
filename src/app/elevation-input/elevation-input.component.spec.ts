import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { ElevationInputComponent } from './elevation-input.component'

describe('ElevationInputComponent', () => {
  let component: ElevationInputComponent
  let fixture: ComponentFixture<ElevationInputComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElevationInputComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevationInputComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
