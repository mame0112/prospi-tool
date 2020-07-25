import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";
import { Consts } from '../consts';

import { PlayerHolderService } from '../player-holder.service';
import { PlayerListLoaderService } from '../player-list-loader.service';

import { Util } from '../util/util';

import { Player } from '../player';
import { Batter } from '../batter';


@Component({
  selector: 'app-candidate-batter',
  templateUrl: './candidate-batter.component.html',
  styleUrls: ['./candidate-batter.component.css']
})
export class CandidateBatterComponent implements OnInit {

    constructor(private http: HttpClient,
        private holderService: PlayerHolderService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private loaderService: PlayerListLoaderService) { }


    targetLevel = Consts.targetLevel;
    targetTeam = Consts.targetTeam;

    batterArray: Batter[] = [];
    targetBatters: Batter[] = [];

    listItem: Player[] = [];

    selectedTeam = {"hawks": true, "lions": true, "marins": true, "buffalows": true, "rakuten": true, "fighters": true, "giants": true, "baysters": true, "tigners": true, "carp": true, "dragons": true, "swallows": true};
    selectedPosition = {"catcher": true, "first": true, "second": true, "third": true, "short": true, "left": true, "center": true, "right": true};

    checked = false;

    targetPosition: string;

    util: Util = new Util();

    ngOnInit(): void {

        this.targetPosition = this.activatedRoute.snapshot.paramMap.get('position');
        console.log(this.targetPosition);
        this.loaderService.loadBatterCandidateList().pipe(
            // tap(param => console.log(param)))
            tap())
            .subscribe(result => {
                this.batterArray = result;
                this.listItem = JSON.parse(JSON.stringify(this.batterArray));
            });
    }

    createUuid(team: string, name: string, series: string): string{
        // return null;
        return btoa(unescape(encodeURIComponent(team+name+series)));
    }


    onSubmit(): void {
        this.chooseSelectedTeamPlayers();
    }

    chooseSelectedTeamPlayers(): void {

        console.log('chooseSelectedTeamPlayers');

        this.listItem.length = 0;

        Object.keys(this.selectedTeam).map(key => {
            if(this.selectedTeam[key]){
                for (let batter in this.batterArray){
                    if(this.batterArray[batter].id == key){
                        console.log('Same2');
                        console.log(this.batterArray[batter].name);
                        if(this.isApplicableBatterPositionEnabled(this.batterArray[batter])){
                            this.listItem.push(this.batterArray[batter]);
                        }

                    }
                }
            }
        });

    }

    isApplicableBatterPositionEnabled(batter: Batter): boolean {

        let result = false;

        if(this.selectedPosition.catcher && batter.catcher != '-'){
            result = true;
        }

        if(this.selectedPosition.first && batter.first != '-'){
            result = true;
        }
        if(this.selectedPosition.second && batter.second != '-'){
            result = true;
        }
        if(this.selectedPosition.third && batter.third != '-'){
            result = true;
        }
        if(this.selectedPosition.short && batter.short != '-'){
            result = true;
        }
        if(this.selectedPosition.left && batter.left != '-'){
            result = true;
        }
        if(this.selectedPosition.center && batter.center != '-'){
            result = true;
        }

        if(this.selectedPosition.right && batter.right != '-'){
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


    selectPlayer(player: Batter): void{
        console.log('selectPlayer');
        console.log(player);

        this.storeDataToHolderService(this.targetPosition, player);

        this.router.navigate(['/order']);

    }

    storeDataToHolderService(position: string, player: Batter): void {
        switch(position){
            case 'catcher':
                this.holderService.storeCatcher(player);
                break;
            case 'first':
                this.holderService.storeFirst(player);
                break;
            case 'second':
                this.holderService.storeSecond(player);
                break;
            case 'third':
                this.holderService.storeThird(player);
                break;
            case 'short':
                this.holderService.storeShort(player);
                break;
            case 'left':
                this.holderService.storeLeft(player);
                break;
            case 'center':
                this.holderService.storeCenter(player);
                break;
            case 'right':
                this.holderService.storeRight(player);
                break;
            case 'dh':
                this.holderService.storeDh(player);
                break;
            case 'batter_bench1':
                this.holderService.storeBatterBench1(player);
                break;
            case 'batter_bench2':
                this.holderService.storeBatterBench2(player);
                break;
            case 'batter_bench3':
                this.holderService.storeBatterBench3(player);
                break;
            case 'batter_bench4':
                this.holderService.storeBatterBench4(player);
                break;
            case 'batter_alt1':
                this.holderService.storeBatterAlt1(player);
                break;
            case 'batter_alt2':
                this.holderService.storeBatterAlt2(player);
                break;

        }

    }

}
