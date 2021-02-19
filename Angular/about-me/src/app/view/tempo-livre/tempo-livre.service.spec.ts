import { TestBed } from '@angular/core/testing';

import { TempoLivreService } from './tempo-livre.service';

describe('TempoLivreService', () => {
  let service: TempoLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempoLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
