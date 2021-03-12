import { TestBed } from '@angular/core/testing';

import { LoadingIndicatorInterceptorService } from './loading-indicator-interceptor.service';

describe('LoadingIndicatorInterceptorService', () => {
  let service: LoadingIndicatorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingIndicatorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
