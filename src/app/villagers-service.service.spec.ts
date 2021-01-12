import { TestBed } from '@angular/core/testing';

import { VillagersServiceService } from './villagers-service.service';

describe('VillagersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VillagersServiceService = TestBed.get(VillagersServiceService);
    expect(service).toBeTruthy();
  });
});
