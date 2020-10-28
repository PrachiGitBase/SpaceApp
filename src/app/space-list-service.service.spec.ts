import { TestBed } from '@angular/core/testing';

import { SpaceListServiceService } from './space-list-service.service';

describe('SpaceListServiceService', () => {
  let service: SpaceListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
