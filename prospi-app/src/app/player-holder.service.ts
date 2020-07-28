import { Injectable } from '@angular/core';

import { Observable, of, concat } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';
import { PlayerListLoaderService } from './player-list-loader.service';

import { Consts } from './consts';

import { Player } from './player';
import { Pitcher } from './pitcher';
import { Batter } from './batter';
import { Title } from './title';

@Injectable({
  providedIn: 'root'
})
export class PlayerHolderService {

    batterArray: Batter[] = [];
    pitcherArray: Pitcher[] = [];

    starter1: Pitcher;
    starter2: Pitcher;
    starter3: Pitcher;
    starter4: Pitcher;
    starter5: Pitcher;
    setupper1: Pitcher;
    setupper2: Pitcher;
    setupper3: Pitcher;
    setupper4: Pitcher;
    closer: Pitcher;
    pitcher_bench: Pitcher;

    pitcher_alt1: Pitcher;
    pitcher_alt2: Pitcher;

    catcher: Batter;
    first: Batter;
    second: Batter;
    third: Batter;
    short: Batter;
    left: Batter;
    center: Batter;
    right: Batter;
    dh: Batter;
    batter_bench1: Batter;
    batter_bench2: Batter;
    batter_bench3: Batter;
    batter_bench4: Batter;


    batter_alt1: Batter;
    batter_alt2: Batter;

    // playerListObservable: any;
    // orderListObservable: any;

    constructor(private cookieService: CookieService,
        private loaderService: PlayerListLoaderService) {
        console.log('PlayerHolderService Constructor');
    }

    private storeCookie(target: string, player: string): void {
        console.log('storeCookie');
        // console.log(JSON.stringify(player));
        // console.log(player);
        // console.log(JSON.stringify(player));
        // this.cookieService.set(target, JSON.stringify(player));
        this.cookieService.set(target, player);
    }

    loadPitcherOrderList(): Observable<any> {
        console.log('loadPitcherOrderList');
        return new Observable(observable=>{
            this.loaderService.loadPitcherCandidateList().subscribe(result => {
                this.pitcherArray = result;

                let pitchers = this.getPitcherData();
                console.log(pitchers);

                observable.next(pitchers);
                observable.complete();
            });
        });
    }

    loadBatterOrderList(): Observable<any> {
        return new Observable(observable=>{
            this.loaderService.loadBatterCandidateList().subscribe(result => {
                this.batterArray = result;

                let batters = this.getBatterData();
                observable.next(batters);
                observable.complete();
            });
        });
    }

    private findPitcherFromList(uuid: string): any{
        console.log('findPitcherFromList');
        console.log(uuid);
        for (let item of this.pitcherArray){
            if(JSON.stringify(item).indexOf(uuid) != -1){
                console.log('Item found');
                return item;
            }
        }
        return null;
    }

    private findBatterFromList(uuid: string): any{
        console.log('findBatterFromList');
        for (let item of this.batterArray){
            if(JSON.stringify(item).indexOf(uuid) != -1){
                console.log('Item found');
                return item;
            }
        }
        return null;
    }

    private findPitcherTitle(title_id: string): any {
        console.log('findPitcherTitle');
        for (let item of Title.pitcher_titles){
            if(JSON.stringify(item).indexOf(title_id) != -1){
                console.log('Title found');
                return item;
            }
        }
    }

    storeStarter1(pitcher: Pitcher): void{
        console.log(pitcher);
        // console.log(JSON.stringify(pitcher).indexOf('5pel546J5LqVMjAyMFMx'));
        // Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER1, this.createResultJson(pitcher.uuid, null)):this.starter1 = pitcher;
        // this.storeCookie(Consts.STARTER1, this.createStoreData(pitcher.uuid, null));
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER1, pitcher.uuid):this.starter1 = pitcher;
    }
    storeStarter2(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER2, pitcher.uuid):this.starter2 = pitcher;
    }
    storeStarter3(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER3, pitcher.uuid):this.starter3 = pitcher;
    }
    storeStarter4(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER4, pitcher.uuid):this.starter4 = pitcher;
    }
    storeStarter5(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER5, pitcher.uuid):this.starter5 = pitcher;
    }

    storeSetupper1(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SETUPPER1, pitcher.uuid):this.setupper1 = pitcher;
    }
    storeSetupper2(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SETUPPER2, pitcher.uuid):this.setupper2 = pitcher;
    }
    storeSetupper3(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SETUPPER3, pitcher.uuid):this.setupper3 = pitcher;
    }
    storeSetupper4(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SETUPPER4, pitcher.uuid):this.setupper4 = pitcher;
    }
    storeCloser(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.CLOSESR, pitcher.uuid):this.closer = pitcher;
    }
    storePitcherBench(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.PITCHER_BENCH, pitcher.uuid):this.pitcher_bench = pitcher;
    }

    storePitcherAlt1(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.PITCHER_ALT1, pitcher.uuid):this.pitcher_alt1 = pitcher;
    }

    storePitcherAlt2(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.PITCHER_ALT2, pitcher.uuid):this.pitcher_alt2 = pitcher;
    }

    storeCatcher(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.CATCHER, batter.uuid):this.catcher = batter;
    }
    storeFirst(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.FIRST, batter.uuid):this.first = batter;
    }
    storeSecond(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SECOND, batter.uuid):this.second = batter;
    }
    storeThird(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.THIRD, batter.uuid):this.third = batter;
    }
    storeShort(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SHORT, batter.uuid):this.short = batter;
    }
    storeLeft(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.LEFT, batter.uuid):this.left = batter;
    }
    storeCenter(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.CENTER, batter.uuid):this.center = batter;
    }
    storeRight(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.RIGHT, batter.uuid):this.right = batter;
    }
    storeDh(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.DH, batter.uuid):this.dh = batter;
    }
    storeBatterBench1(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_BENCH1, batter.uuid):this.batter_bench1 = batter;
    }
    storeBatterBench2(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_BENCH2, batter.uuid):this.batter_bench2 = batter;
    }
    storeBatterBench3(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_BENCH3, batter.uuid):this.batter_bench3 = batter;
    }
    storeBatterBench4(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_BENCH4, batter.uuid):this.batter_bench4 = batter;
    }
    storeBatterAlt1(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_ALT1, batter.uuid):this.batter_alt1 = batter;
    }
    storeBatterAlt2(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_ALT2, batter.uuid):this.batter_alt2 = batter;
    }

    private updatePitcherTitle(name: string, pitcher: Pitcher, title: string): void {
        console.log(pitcher);
        pitcher.title = title;
        // let st = this.createStoreData(pitcher.uuid, title);
        // let p: string = this.cookieService.get(name);
        // console.log(p);

        // let p: Pitcher = JSON.parse(this.cookieService.get(name));
        // p.title = title
        // this.cookieService.set(name, JSON.stringify(p));
    }

    setPitcherTitle(positionName: string, title: any): void {

        console.log('setPitcherTitle');

        if (Consts.USE_COOKIE){
            let p: Pitcher = this.getCookiePitcherData(positionName);
            let data = this.createStoreData(p.uuid, title);
            this.storeCookie(positionName, data);

        } else {
            switch(positionName){
                case Consts.STARTER1:
                    this.updatePitcherTitle(Consts.STARTER1, this.starter1, title);
                    break;
                case Consts.STARTER2:
                    this.updatePitcherTitle(Consts.STARTER2, this.starter2, title);
                    break;
                case Consts.STARTER3:
                    this.updatePitcherTitle(Consts.STARTER3, this.starter3, title);
                    break;
                case Consts.STARTER4:
                    this.updatePitcherTitle(Consts.STARTER4, this.starter4, title);
                    break;
                case Consts.STARTER5:
                    this.updatePitcherTitle(Consts.STARTER5, this.starter5, title);
                    break;
                case Consts.SETUPPER1:
                    this.updatePitcherTitle(Consts.SETUPPER1, this.setupper1, title);
                    break;
                case Consts.SETUPPER2:
                    this.updatePitcherTitle(Consts.SETUPPER2, this.setupper2, title);
                    break;
                case Consts.SETUPPER3:
                    this.updatePitcherTitle(Consts.SETUPPER3, this.setupper3, title);
                    break;
                case Consts.SETUPPER4:
                    this.updatePitcherTitle(Consts.SETUPPER4, this.setupper4, title);
                    break;
                case Consts.CLOSESR:
                    this.updatePitcherTitle(Consts.CLOSESR, this.closer, title);
                    break;
                case Consts.PITCHER_BENCH:
                    this.updatePitcherTitle(Consts.PITCHER_BENCH, this.pitcher_bench, title);
                    break;
                case Consts.PITCHER_ALT1:
                    this.updatePitcherTitle(Consts.PITCHER_ALT1, this.pitcher_alt1, title);
                    break;
                case Consts.PITCHER_ALT2:
                    this.updatePitcherTitle(Consts.PITCHER_ALT2, this.pitcher_alt2, title);
                    break;
            }
        }        
    }

    // Second argument is null in case if we use cookie
    private updateBatterTitle(position: string, batter: Batter, title: string): void {
        if(Consts.USE_COOKIE){
            let uuid = JSON.parse(this.cookieService.get(position));
            let b: Batter;
            b = this.findBatterFromList(uuid);
            if(b != null){
                //TODO
                b.title = title
                // this.cookieService.set(position, JSON.stringify(b));
            }
        } else {
            batter.title = title;
        }
    }

    setBatterTitle(positionName: string, title: any): void {

        console.log('setBatterTitle');

        switch(positionName){
            case Consts.CATCHER:
                // Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_BENCH3, batter.uuid):this.batter_bench3 = batter;
                this.updateBatterTitle(Consts.CATCHER, this.catcher, title);
                break;
            case Consts.FIRST:
                this.updateBatterTitle(Consts.FIRST, this.first, title);
                break;
            case Consts.SECOND:
                this.updateBatterTitle(Consts.SECOND, this.second, title);
                break;
            case Consts.THIRD:
                this.updateBatterTitle(Consts.THIRD, this.third, title);
                break;
            case Consts.SHORT:
                this.updateBatterTitle(Consts.SHORT, this.short, title);
                break;
            case Consts.LEFT:
                this.updateBatterTitle(Consts.LEFT, this.left, title);
                break;
            case Consts.CENTER:
                this.updateBatterTitle(Consts.CENTER, this.center, title);
                break;
            case Consts.RIGHT:
                this.updateBatterTitle(Consts.RIGHT, this.right, title);
                break;
            case Consts.DH:
                this.updateBatterTitle(Consts.DH, this.dh, title);
                break;
            case Consts.BATTER_BENCH1:
                this.updateBatterTitle(Consts.BATTER_BENCH1, this.batter_bench1, title);
                break;
            case Consts.BATTER_BENCH2:
                this.updateBatterTitle(Consts.BATTER_BENCH2, this.batter_bench2, title);
                break;
            case Consts.BATTER_BENCH3:
                this.updateBatterTitle(Consts.BATTER_BENCH3, this.batter_bench3, title);
                break;
            case Consts.BATTER_BENCH4:
                this.updateBatterTitle(Consts.BATTER_BENCH4, this.batter_bench4, title);
                break;
            case Consts.BATTER_ALT1:
                this.updateBatterTitle(Consts.BATTER_ALT1, this.batter_alt1, title);
                break;
            case Consts.BATTER_ALT2:
                this.updateBatterTitle(Consts.BATTER_ALT2, this.batter_alt2, title);
                break;

        }
        
    }

    private getCookiePitcherData(pisition: string): Pitcher{
        console.log('getCookiePitcherData');
        console.log(pisition);
        // console.log(pisition);
        if (this.cookieService.check(pisition)){
            // console.log('Check OK');
            // console.log(this.cookieService.get(pisition));
            let cookie_data = this.cookieService.get(pisition);


            let index = cookie_data.indexOf('@');
            let uuid = null;
            if(index != -1){
                uuid = cookie_data.substr(0, index);
            } else {
                uuid = cookie_data;
            }

            let player = this.findPitcherFromList(uuid);
            let title_id = cookie_data.substr(index+1);
            // let player = this.findPitcherFromList(cookie_data['player']);
            // let title_id = cookie_data['title'];


            let title = null;

            if(title_id != null && title_id != 'null'){
                title = this.findPitcherTitle(title_id);
            }

            return this.createResultJson(player, title);
            // return JSON.parse(this.cookieService.get(pisition));
        }
        else {
            return null;
        }
    }

    private getCookieBatterData(pisition: string): Batter{
        if (this.cookieService.check(pisition)){
            console.log(this.cookieService.get(pisition));
            return this.findBatterFromList(this.cookieService.get(pisition));
        }
        else {
            return null;
        }
    }

    private getCookiePitcherTitle(position: string): string{
        console.log('getCookiePitcherTitle');
        if (this.cookieService.check(position)){
        }

        return null;
    }

    private createStoreData(uuid: string, title: string): string {
        return uuid + '@' + title;
    }

    private createResultJson(player: any, title: any): any {
        let result = [];
        result['player'] = player;
        result['title'] = title;
        // let result = null;
        // result = player + '@' + title;

        return result;
    }

    getAllBatterData(): Observable<any> {
        let data = this.getBatterData();

        return new Observable<any>(observable => {
            observable.next(data);
            observable.complete();
        });
    }


    getAllPitcherData(): Observable<any> {
        let data = this.getPitcherData();

        return new Observable<any>(observable => {
            observable.next(data);
            observable.complete();
        });
    }

    private getPitcherData(): Player[]{

        let data: Player[] = [];

        if(Consts.USE_COOKIE){
            console.log(this.getCookiePitcherData(Consts.STARTER1));
            data.push({key: Consts.STARTER1, value:this.getCookiePitcherData(Consts.STARTER1)});
            data.push({key: Consts.STARTER2, value:this.getCookiePitcherData(Consts.STARTER2)});
            data.push({key: Consts.STARTER3, value:this.getCookiePitcherData(Consts.STARTER3)});
            data.push({key: Consts.STARTER4, value:this.getCookiePitcherData(Consts.STARTER4)});
            data.push({key: Consts.STARTER5, value:this.getCookiePitcherData(Consts.STARTER5)});
            data.push({key: Consts.SETUPPER1, value:this.getCookiePitcherData(Consts.SETUPPER1)});
            data.push({key: Consts.SETUPPER2, value:this.getCookiePitcherData(Consts.SETUPPER2)});
            data.push({key: Consts.SETUPPER3, value:this.getCookiePitcherData(Consts.SETUPPER3)});
            data.push({key: Consts.SETUPPER4, value:this.getCookiePitcherData(Consts.SETUPPER4)});
            data.push({key: Consts.CLOSESR, value:this.getCookiePitcherData(Consts.CLOSESR)});
            data.push({key: Consts.PITCHER_BENCH, value:this.getCookiePitcherData(Consts.PITCHER_BENCH)});
            data.push({key: Consts.PITCHER_ALT1, value:this.getCookiePitcherData(Consts.PITCHER_ALT1)});
            data.push({key: Consts.PITCHER_ALT2, value:this.getCookiePitcherData(Consts.PITCHER_ALT2)});

        } else {
            data.push({key: Consts.STARTER1, value:this.starter1});
            data.push({key: Consts.STARTER2, value:this.starter2});
            data.push({key: Consts.STARTER3, value:this.starter3});
            data.push({key: Consts.STARTER4, value:this.starter4});
            data.push({key: Consts.STARTER5, value:this.starter5});
            data.push({key: Consts.SETUPPER1, value:this.setupper1});
            data.push({key: Consts.SETUPPER2, value:this.setupper2});
            data.push({key: Consts.SETUPPER3, value:this.setupper3});
            data.push({key: Consts.SETUPPER4, value:this.setupper4});
            data.push({key: Consts.CLOSESR, value:this.closer});
            data.push({key: Consts.PITCHER_BENCH, value:this.pitcher_bench});
            data.push({key: Consts.PITCHER_ALT1, value:this.pitcher_alt1});
            data.push({key: Consts.PITCHER_ALT2, value:this.pitcher_alt2});
        }

        return data;
    }

    private getBatterData(): Player[]{
        let data: Player[] = [];

        if(Consts.USE_COOKIE){
            data.push({key: Consts.CATCHER, value:this.getCookieBatterData(Consts.CATCHER)});
            data.push({key: Consts.FIRST, value:this.getCookieBatterData(Consts.FIRST)});
            data.push({key: Consts.SECOND, value:this.getCookieBatterData(Consts.SECOND)});
            data.push({key: Consts.THIRD, value:this.getCookieBatterData(Consts.THIRD)});
            data.push({key: Consts.SHORT, value:this.getCookieBatterData(Consts.SHORT)});
            data.push({key: Consts.LEFT, value:this.getCookieBatterData(Consts.LEFT)});
            data.push({key: Consts.CENTER, value:this.getCookieBatterData(Consts.CENTER)});
            data.push({key: Consts.RIGHT, value:this.getCookieBatterData(Consts.RIGHT)});
            data.push({key: Consts.DH, value:this.getCookieBatterData(Consts.DH)});
            data.push({key: Consts.BATTER_BENCH1, value:this.getCookieBatterData(Consts.BATTER_BENCH1)});
            data.push({key: Consts.BATTER_BENCH2, value:this.getCookieBatterData(Consts.BATTER_BENCH2)});
            data.push({key: Consts.BATTER_BENCH3, value:this.getCookieBatterData(Consts.BATTER_BENCH3)});
            data.push({key: Consts.BATTER_BENCH4, value:this.getCookieBatterData(Consts.BATTER_BENCH4)});
            data.push({key: Consts.BATTER_ALT1, value:this.getCookieBatterData(Consts.BATTER_ALT1)});
            data.push({key: Consts.BATTER_ALT2, value:this.getCookieBatterData(Consts.BATTER_ALT2)});
        } else {
            data.push({key: Consts.CATCHER, value:this.catcher});
            data.push({key: Consts.FIRST, value:this.first});
            data.push({key: Consts.SECOND, value:this.second});
            data.push({key: Consts.THIRD, value:this.third});
            data.push({key: Consts.SHORT, value:this.short});
            data.push({key: Consts.LEFT, value:this.left});
            data.push({key: Consts.CENTER, value:this.center});
            data.push({key: Consts.RIGHT, value:this.right});
            data.push({key: Consts.DH, value:this.dh});
            data.push({key: Consts.BATTER_BENCH1, value:this.batter_bench1});
            data.push({key: Consts.BATTER_BENCH2, value:this.batter_bench2});
            data.push({key: Consts.BATTER_BENCH3, value:this.batter_bench3});
            data.push({key: Consts.BATTER_BENCH4, value:this.batter_bench4});
            data.push({key: Consts.BATTER_ALT1, value:this.batter_alt1});
            data.push({key: Consts.BATTER_ALT2, value:this.batter_alt2});
        }

        return data;
    }

    deleteAllCookies(): void {
        console.log('deleteAllCookies');
        this.cookieService.deleteAll();
    }

}
