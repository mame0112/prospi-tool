import { Injectable, OnInit } from '@angular/core';

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
export class ComboCalculateService implements OnInit {

    players: Player[];
    checkResult: CheckResult;

    constructor(private holderService: PlayerHolderService) {
        console.log('ComboCalculateService constructor');
    }

    ngOnInit(): void {
        // this.players = this.holderService.getAllPositionData();
        // this.executeComboCheck();
    }

    executeComboCheck(): void {
        console.log('executeComboCheck');;
        new TeamFormationChecker().check(this.players);
    }


    // extreme_team_spirits = function(): boolean{
    //     console.log('extreme_team_spirits');
    //     return true;
    // }

    // super_team_spirits = function(): boolean{
    //     return true;
    // }





}
