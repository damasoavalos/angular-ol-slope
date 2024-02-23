import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { ClearAllButtonComponent } from './clear-all-button.component'

describe('ClearAllButtonComponent', () => {
  let component: ClearAllButtonComponent
  let fixture: ComponentFixture<ClearAllButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClearAllButtonComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearAllButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
