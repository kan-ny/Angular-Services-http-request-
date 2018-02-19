import { TestBed, inject } from '@angular/core/testing';

import { SjobsService } from './sjobs.service';

describe('SjobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SjobsService]
    });
  });

  it('should be created', inject([SjobsService], (service: SjobsService) => {
    expect(service).toBeTruthy();
  }));
});
