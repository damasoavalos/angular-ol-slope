import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { RunLineButtonComponent } from './run-line-button.component'

describe('RunLineButtonComponent', () => {
  let component: RunLineButtonComponent
  let fixture: ComponentFixture<RunLineButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RunLineButtonComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(RunLineButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
