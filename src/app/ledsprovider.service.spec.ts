import { TestBed, inject } from '@angular/core/testing';

import { LedsproviderService } from './ledsprovider.service';

describe('LedsproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LedsproviderService]
    });
  });

  it('should be created', inject([LedsproviderService], (service: LedsproviderService) => {
    expect(service).toBeTruthy();
  }));
});
