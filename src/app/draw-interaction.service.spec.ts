import { TestBed } from '@angular/core/testing';

import { DrawInteractionService } from './draw-interaction.service';

describe('DrawInteractionService', () => {
  let service: DrawInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
