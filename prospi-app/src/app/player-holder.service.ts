import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { Consts } from './consts';

import { Player } from './player';
import { Pitcher } from './pitcher';
import { Batter } from './batter';

@Injectable({
  providedIn: 'root'
})
export class PlayerHolderService {

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

    constructor(private cookieService: CookieService) {
        console.log('PlayerHolderService Constructor');
    }

    storeCookie(target: string, player: Player): void {
        this.cookieService.set(target, JSON.stringify(player));
    }


    storeStarter1(pitcher: Pitcher): void{
        console.log('storeStarter1');
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER1, pitcher):this.starter1 = pitcher;
    }
    storeStarter2(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER2, pitcher):this.starter2 = pitcher;
    }
    storeStarter3(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER3, pitcher):this.starter3 = pitcher;
    }
    storeStarter4(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER4, pitcher):this.starter4 = pitcher;
    }
    storeStarter5(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.STARTER5, pitcher):this.starter5 = pitcher;
    }

    storeSetupper1(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SETUPPER1, pitcher):this.setupper1 = pitcher;
    }
    storeSetupper2(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SETUPPER1, pitcher):this.setupper2 = pitcher;
    }
    storeSetupper3(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SETUPPER1, pitcher):this.setupper3 = pitcher;
    }
    storeSetupper4(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SETUPPER1, pitcher):this.setupper4 = pitcher;
    }
    storeCloser(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.CLOSESR, pitcher):this.closer = pitcher;
    }
    storePitcherBench(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.PITCHER_BENCH, pitcher):this.pitcher_bench = pitcher;
    }

    storePitcherAlt1(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.PITCHER_ALT1, pitcher):this.pitcher_alt1 = pitcher;
    }

    storePitcherAlt2(pitcher: Pitcher): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.PITCHER_ALT2, pitcher):this.pitcher_alt2 = pitcher;
    }

    storeCatcher(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.CATCHER, batter):this.catcher = batter;
    }
    storeFirst(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.FIRST, batter):this.first = batter;
    }
    storeSecond(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SECOND, batter):this.second = batter;
    }
    storeThird(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.THIRD, batter):this.third = batter;
    }
    storeShort(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.SHORT, batter):this.short = batter;
    }
    storeLeft(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.LEFT, batter):this.left = batter;
    }
    storeCenter(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.CENTER, batter):this.center = batter;
    }
    storeRight(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.RIGHT, batter):this.right = batter;
    }
    storeDh(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.DH, batter):this.dh = batter;
    }
    storeBatterBench1(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_BENCH1, batter):this.batter_bench1 = batter;
    }
    storeBatterBench2(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_BENCH2, batter):this.batter_bench2 = batter;
    }
    storeBatterBench3(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_BENCH3, batter):this.batter_bench3 = batter;
    }
    storeBatterBench4(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_BENCH4, batter):this.batter_bench4 = batter;
    }
    storeBatterAlt1(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_ALT1, batter):this.batter_alt1 = batter;
    }
    storeBatterAlt2(batter: Batter): void{
        Consts.USE_COOKIE ? this.storeCookie(Consts.BATTER_ALT2, batter):this.batter_alt2 = batter;
    }

    updatePitcherTitle(name: string, pitcher: Pitcher, title: string): void {
        if(Consts.USE_COOKIE){
            let p: Pitcher = JSON.parse(this.cookieService.get(name));
            p.title = title
            this.cookieService.set(name, JSON.stringify(p));
        } else {
            pitcher.title = title;
        }
    }

    setPitcherTitle(positionName: string, title: any): void {

        console.log('setPitcherTitle');

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

    updateBatterTitle(name: string, batter: Batter, title: string): void {
        if(Consts.USE_COOKIE){
            let b: Batter = JSON.parse(this.cookieService.get(name));
            b.title = title
            this.cookieService.set(name, JSON.stringify(b));
        } else {
            batter.title = title;
        }
    }

    setBatterTitle(positionName: string, title: any): void {

        console.log('setBatterTitle');

        switch(positionName){
            case Consts.CATCHER:
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

    getCookiePitcherData(pisition: string): Pitcher{
        if (this.cookieService.check(pisition)){
            return JSON.parse(this.cookieService.get(pisition));
        }
        else {
            return null;
        }
    }

    getCookieBatterData(pisition: string): Batter{
        if (this.cookieService.check(pisition)){
            return JSON.parse(this.cookieService.get(pisition));
        }
        else {
            return null;
        }
    }

    getStarter1(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.STARTER1):this.starter1;
    }
    getStarter2(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.STARTER2):this.starter2;
    }
    getStarter3(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.STARTER3):this.starter3;
    }
    getStarter4(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.STARTER4):this.starter4;
    }
    getStarter5(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.STARTER5):this.starter5;
    }
    getSetupper1(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.SETUPPER1):this.setupper1;
    }
    getSetupper2(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.SETUPPER2):this.setupper2;
    }
    getSetupper3(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.SETUPPER3):this.setupper3;
    }
    getSetupper4(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.SETUPPER4):this.setupper4;
    }
    getCloser(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.CLOSESR):this.closer;
    }
    getPitcherBench(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.PITCHER_BENCH):this.pitcher_bench;
    }
    getPitcherAlt1(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.PITCHER_ALT1):this.pitcher_alt1;
    }
    getPitcherAlt2(): Pitcher{
        return Consts.USE_COOKIE? this.getCookiePitcherData(Consts.PITCHER_ALT2):this.pitcher_alt2;
    }
    getCatcher(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.CATCHER):this.catcher;
    }
    getFirst(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.FIRST):this.first;
    }
    getSecond(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.SECOND):this.second;
    }
    getThird(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.THIRD):this.third;
    }
    getShort(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.SHORT):this.short;
    }
    getLeft(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.LEFT):this.left;
    }
    getCenter(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.CENTER):this.center;
    }
    getRight(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.RIGHT):this.right;
    }
    getDh(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.DH):this.dh;
    }
    getBatterBench1(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.BATTER_BENCH1):this.batter_bench1;
    }
    getBatterBench2(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.BATTER_BENCH2):this.batter_bench2;
    }
    getBatterBench3(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.BATTER_BENCH3):this.batter_bench3;
    }
    getBatterBench4(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.BATTER_BENCH4):this.batter_bench4;
    }
    getBatterAlt1(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.BATTER_ALT1):this.batter_alt1;
    }
    getBatterAlt2(): Batter{
        return Consts.USE_COOKIE? this.getCookieBatterData(Consts.BATTER_ALT2):this.batter_alt2;
    }

    getAllPositionData(): Player[]{
        let data: Player[] = [];

        if(Consts.USE_COOKIE){
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

    getAllPitcherData(): Player[]{
        let data: Player[] = [];

        if(Consts.USE_COOKIE){
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

    getAllBatterData(): Player[]{
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

}
