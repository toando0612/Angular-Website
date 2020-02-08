import { TestBed } from '@angular/core/testing';

import { OpenLinkService } from './open-link.service';

describe('OpenLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenLinkService = TestBed.get(OpenLinkService);
    expect(service).toBeTruthy();
  });
});
