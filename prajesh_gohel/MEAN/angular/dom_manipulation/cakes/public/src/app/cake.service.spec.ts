import { TestBed } from '@angular/core/testing';

import { CakeService } from './cake.service';

describe('CakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CakeService = TestBed.get(CakeService);
    expect(service).toBeTruthy();
  });
});
