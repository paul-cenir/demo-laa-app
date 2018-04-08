import { TestBed, inject } from '@angular/core/testing';

import { AppGlobalControllerService } from './app-global-controller.service';

describe('AppGlobalControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGlobalControllerService]
    });
  });

  it('should be created', inject([AppGlobalControllerService], (service: AppGlobalControllerService) => {
    expect(service).toBeTruthy();
  }));
});
