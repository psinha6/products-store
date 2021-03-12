import { TestBed } from '@angular/core/testing';

import { ProdHttpServiceService } from './prod-http-service.service';

describe('ProdHttpServiceService', () => {
  let service: ProdHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
