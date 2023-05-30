import { TestBed } from '@angular/core/testing';

import { GrazilianGeographyService } from './grazilian-geography.service';

describe('GrazilianGeographyService', () => {
  let service: GrazilianGeographyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrazilianGeographyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
