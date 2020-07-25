import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';

/*import { HttpClient } from "@angular/common/http";*/
import { Consts } from '../consts';

import { PlayerHolderService } from '../player-holder.service';
import { PlayerListLoaderService } from '../player-list-loader.service';

import { Util } from '../util/util';

import { Player } from '../player';
import { Pitcher } from '../pitcher';

@Component({
  selector: 'app-candidate-pitcher',
  templateUrl: './candidate-pitcher.component.html',
  styleUrls: ['./candidate-pitcher.component.css']
})
export class CandidatePitcherComponent implements OnInit {

    constructor(private holderService: PlayerHolderService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private loaderService: PlayerListLoaderService) { }

    targetLevel = Consts.targetLevel;
    targetTeam = Consts.targetTeam;

    pitcherArray: Pitcher[] = [];
    targetPithers: Pitcher[] = [];

    listItem: Player[] = [];

    selectedTeam = {"hawks": true, "lions": true, "marins": true, "buffalows": true, "rakuten": true, "fighters": true, "giants": true, "baysters": true, "tigners": true, "carp": true, "dragons": true, "swallows": true};
    selectedPosition = {"starter": true, "setupper": true, "closer": true};

    checked = false;

    targetPosition: string;

    util: Util = new Util();

    ngOnInit(): void {

        this.targetPosition = this.activatedRoute.snapshot.paramMap.get('position');
        console.log(this.targetPosition);

        this.loaderService.loadPitcherCandidateList().pipe(
            // tap(params => console.log(params)))
            tap())
        .subscribe(result => {
            this.pitcherArray = result;
            this.listItem = JSON.parse(JSON.stringify(this.pitcherArray));
        });
    }

    onSubmit(): void {
        this.chooseSelectedTeamPlayers();
    }

    chooseSelectedTeamPlayers(): void {

        console.log('chooseSelectedTeamPlayers');

        // this.targetPithers.length = 0;
        this.listItem.length = 0;

        Object.keys(this.selectedTeam).map(key => {
            if(this.selectedTeam[key]){
                for (let pitcher in this.pitcherArray){
                    if(this.pitcherArray[pitcher].id == key){
                        console.log('Same');
                        console.log(this.pitcherArray[pitcher].name);
                        if(this.isApplicablePitcherPositionEnabled(this.pitcherArray[pitcher])){
                            // this.targetPithers.push(this.pitcherArray[pitcher]);
                            this.listItem.push(this.pitcherArray[pitcher]);
                        }

                    }
                }

            }
        });

    }

    isApplicablePitcherPositionEnabled(pitcher: Pitcher): boolean {

        let result = false;

        if(this.selectedPosition.starter && pitcher.starter == 'S'){
            result = true;
        }
        if(this.selectedPosition.setupper && pitcher.setupper == 'S'){
            result = true;
        }
        if(this.selectedPosition.closer && pitcher.closer == 'S'){
            result = true;
        }

        return result;
    }

    switchAllTeamsStatus(): void {
        console.log('selectAllTeams');

        let allTeamsEnables = true;


        Object.keys(this.selectedTeam).map(key => {
            if(this.selectedTeam[key] == false){
                allTeamsEnables = false;
            }

        });

        //If all teams is enabled, disable all teams
        if(allTeamsEnables){
            this.changeAllTeamStatus(false);
        } else {
            // If more than 1 teams are disabled, enable all teams
            this.changeAllTeamStatus(true);
        }

    }

    changeAllTeamStatus(enable: boolean): void {
        console.log('changeAllTeamStatus');
        Object.keys(this.selectedTeam).map(key => {            
            this.selectedTeam[key] = enable;
        });
    }

    switchAllPositionStatus(): void {
        console.log('switchAllPositionStatus');

        let allPositionsEnables = true;


        Object.keys(this.selectedPosition).map(key => {
            if(this.selectedPosition[key] == false){
                allPositionsEnables = false;
            }

        });

        //If all teams is enabled, disable all teams
        if(allPositionsEnables){
            this.changeAllPositionStatus(false);
        } else {
            // If more than 1 teams are disabled, enable all teams
            this.changeAllPositionStatus(true);
        }

    }

    changeAllPositionStatus(enable: boolean): void {
        console.log('changeAllPositionStatus');
        Object.keys(this.selectedPosition).map(key => {            
            this.selectedPosition[key] = enable;
        });
    }


    selectPlayer(player: Pitcher): void{
        console.log('selectPlayer');
        console.log(player);

        this.storeDataToHolderService(this.targetPosition, player);

        this.router.navigate(['/order']);

    }

    storeDataToHolderService(position: string, player: Pitcher): void {
        switch(position){
            case 'starter1':
                this.holderService.storeStarter1(player);
                break;
            case 'starter2':
                this.holderService.storeStarter2(player);
                break;
            case 'starter3':
                this.holderService.storeStarter3(player);
                break;
            case 'starter4':
                this.holderService.storeStarter4(player);
                break;
            case 'starter5':
                this.holderService.storeStarter5(player);
                break;
            case 'setupper1':
                this.holderService.storeSetupper1(player);
                break;
            case 'setupper2':
                this.holderService.storeSetupper2(player);
                break;
            case 'setupper3':
                this.holderService.storeSetupper3(player);
                break;
            case 'setupper4':
                this.holderService.storeSetupper4(player);
                break;
            case 'closer':
                this.holderService.storeCloser(player);
                break;
            case 'pitcher_bench':
                this.holderService.storePitcherBench(player);
                break;
            case 'pitcher_alt1':
                this.holderService.storePitcherAlt1(player);
                break;
            case 'pitcher_alt2':
                this.holderService.storePitcherAlt2(player);
                break;
        }

    }

}
