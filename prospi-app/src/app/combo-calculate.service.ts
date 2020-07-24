import { Injectable, OnInit } from '@angular/core';

import { Consts } from './consts';

import { PlayerHolderService } from './player-holder.service';

import { Player } from './player';
import { Pitcher } from './pitcher';
import { Batter } from './batter';

@Injectable({
  providedIn: 'root'
})
export class ComboCalculateService implements OnInit {

    players: Player[];

    extreme_team_spirits = function(): boolean{
        console.log('extreme_team_spirits');

        // if(this.is_all_same_team(this.players)){

        // }
        return true;
    }

    super_team_spirits = function(): boolean{
        return true;
    }



    constructor(private holderService: PlayerHolderService) {
        console.log('ComboCalculateService constructor');
    }

    ngOnInit(): void {
        this.players = this.holderService.getAllPositionData();
    }

}
