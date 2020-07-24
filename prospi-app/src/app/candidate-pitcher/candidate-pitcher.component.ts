import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { HttpClient } from "@angular/common/http";
import { Consts } from '../consts';

import { PlayerHolderService } from '../player-holder.service';

import { Util } from '../util/util';

import { Player } from '../player';
import { Pitcher } from '../pitcher';

@Component({
  selector: 'app-candidate-pitcher',
  templateUrl: './candidate-pitcher.component.html',
  styleUrls: ['./candidate-pitcher.component.css']
})
export class CandidatePitcherComponent implements OnInit {

    constructor(private http: HttpClient,
        private holderService: PlayerHolderService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

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

        this.http.get('assets/pitcher.csv', {responseType: 'text'})
        .subscribe(
            data => {
                let csvToRowArray = data.split("\n");
                for (let index = 1; index < csvToRowArray.length - 1; index++) {
                  let row = csvToRowArray[index].split(",");
                  // console.log(row[0]);
                  this.pitcherArray.push(new Pitcher(this.createId(row[0]), this.createUuid(row[0], row[2], row[3]), row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[16], row[17], row[18], row[19], row[20]));
                }
              // this.targetPithers = this.pitcherArray
              // this.targetPithers = JSON.parse(JSON.stringify(this.pitcherArray));
              this.listItem = JSON.parse(JSON.stringify(this.pitcherArray));
            },
            error => {
                console.log(error);
            }
        );

    }

    createId(team: string): string{
        let id = null;

        switch(team){
            case '西':
                id = Consts.LIONS;
                break;
            case 'ソ':
                id = Consts.HAWKS;
                break;
            case 'ロ':
                id = Consts.MARINS;
                break;
            case 'オ':
                id = Consts.BUFFALOWS;
                break;
            case '楽':
                id = Consts.RAKUTEN;
                break;
            case '日':
                id = Consts.FIGHTERS;
                break;
            case '巨':
                id = Consts.GIANTS;
                break;
            case 'De':
                id = Consts.BAYSTERS;
                break;
            case '神':
                id = Consts.TIGERS;
                break;
            case '広':
                id = Consts.CARP;
                break;
            case '中':
                id = Consts.DRAGONS;
                break;
            case 'ヤ':
                id = Consts.SWALLOWS;
                break;

        }

        return id;
    }

    createUuid(team: string, name: string, series: string): string{
        return btoa(unescape(encodeURIComponent(team+name+series)));
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
