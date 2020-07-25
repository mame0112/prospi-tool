import { TestBed } from '@angular/core/testing';

import { PlayerListLoaderService } from './player-list-loader.service';

describe('PlayerListLoaderService', () => {
  let service: PlayerListLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerListLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
