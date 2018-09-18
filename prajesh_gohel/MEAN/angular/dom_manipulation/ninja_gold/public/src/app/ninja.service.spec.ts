import { TestBed } from '@angular/core/testing';

import { NinjaService } from './ninja.service';

describe('NinjaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NinjaService = TestBed.get(NinjaService);
    expect(service).toBeTruthy();
  });
});
