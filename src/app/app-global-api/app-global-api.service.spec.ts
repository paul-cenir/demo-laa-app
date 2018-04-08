import { TestBed, inject } from '@angular/core/testing';

import { AppGlobalApiService } from './app-global-api.service';

describe('AppGlobalApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGlobalApiService]
    });
  });

  it('should be created', inject([AppGlobalApiService], (service: AppGlobalApiService) => {
    expect(service).toBeTruthy();
  }));
});
