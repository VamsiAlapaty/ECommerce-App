import { TestBed } from '@angular/core/testing';

import { AllfrutisService } from './allfrutis.service';

describe('AllfrutisService', () => {
  let service: AllfrutisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllfrutisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
