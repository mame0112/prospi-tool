import { Injectable } from '@angular/core';

import { Consts } from './consts';

import { PlayerHolderService } from './player-holder.service';

import { Player } from './player';
import { Pitcher } from './pitcher';
import { Batter } from './batter';

import { CheckResult } from './check-result';

import { TeamFormationChecker } from './checker/team-formation-checker';

@Injectable({
  providedIn: 'root'
})
export class ComboCalculateService {

    players: Player[];
    checkResult: CheckResult;


    constructor(private holderService: PlayerHolderService) {
        this.initialize();
    }

    initialize(): void {
        this.holderService.loadPitcherOrderList().subscribe(params => {
            console.log(params);
            this.players = params;
            this.executeComboCheck();

        });
    }

    executeComboCheck(): void {
        console.log('executeComboCheck');;
        new TeamFormationChecker().check(this.players);
    }

}
