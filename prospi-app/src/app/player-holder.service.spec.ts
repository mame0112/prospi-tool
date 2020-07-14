import { TestBed } from '@angular/core/testing';

import { PlayerHolderService } from './player-holder.service';

describe('PlayerHolderService', () => {
  let service: PlayerHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
