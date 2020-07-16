import { TestBed } from '@angular/core/testing';

import { ComboCalculateService } from './combo-calculate.service';

describe('ComboCalculateService', () => {
  let service: ComboCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
