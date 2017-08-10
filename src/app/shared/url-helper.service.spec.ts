import { TestBed, inject } from '@angular/core/testing';

import { UrlHelperService } from './url-helper.service';

describe('UrlHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlHelperService]
    });
  });

  it('should be created', inject([UrlHelperService], (service: UrlHelperService) => {
    expect(service).toBeTruthy();
  }));
});
