import { Injectable } from '@angular/core';

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

    constructor() {
        console.log('PlayerHolderService Constructor');
    }


    storeStarter1(pitcher: Pitcher): void{
        console.log('storeStarter1');
        this.starter1 = pitcher;
    }
    storeStarter2(pitcher: Pitcher): void{
        this.starter2 = pitcher;
    }
    storeStarter3(pitcher: Pitcher): void{
        this.starter3 = pitcher;
    }
    storeStarter4(pitcher: Pitcher): void{
        this.starter4 = pitcher;
    }
    storeStarter5(pitcher: Pitcher): void{
        this.starter5 = pitcher;
    }

    storeSetupper1(pitcher: Pitcher): void{
        this.setupper1 = pitcher;
    }
    storeSetupper2(pitcher: Pitcher): void{
        this.setupper2 = pitcher;
    }
    storeSetupper3(pitcher: Pitcher): void{
        this.setupper3 = pitcher;
    }
    storeSetupper4(pitcher: Pitcher): void{
        this.setupper4 = pitcher;
    }
    storeCloser(pitcher: Pitcher): void{
        this.closer = pitcher;
    }
    storePitcherBench(pitcher: Pitcher): void{
        this.pitcher_bench = pitcher;
    }

    storePitcherAlt1(pitcher: Pitcher): void{
        this.pitcher_alt1 = pitcher;
    }

    storePitcherAlt2(pitcher: Pitcher): void{
        this.pitcher_alt2 = pitcher;
    }

    storeCatcher(batter: Batter): void{
        this.catcher = batter;
    }
    storeFirst(batter: Batter): void{
        this.first = batter;
    }
    storeSecond(batter: Batter): void{
        this.second = batter;
    }
    storeThird(batter: Batter): void{
        this.third = batter;
    }
    storeShort(batter: Batter): void{
        this.short = batter;
    }
    storeLeft(batter: Batter): void{
        this.left = batter;
    }
    storeCenter(batter: Batter): void{
        this.center = batter;
    }
    storeRight(batter: Batter): void{
        this.right = batter;
    }
    storeDh(batter: Batter): void{
        this.dh = batter;
    }
    storeBatterBench1(batter: Batter): void{
        this.batter_bench1 = batter;
    }
    storeBatterBench2(batter: Batter): void{
        this.batter_bench2 = batter;
    }
    storeBatterBench3(batter: Batter): void{
        this.batter_bench3 = batter;
    }
    storeBatterBench4(batter: Batter): void{
        this.batter_bench4 = batter;
    }
    storeBatterAlt1(batter: Batter): void{
        this.batter_alt1 = batter;
    }
    storeBatterAlt2(batter: Batter): void{
        this.batter_alt2 = batter;
    }

    setPitcherTitle(positionName: string, title: any): void {

        console.log('setPitcherTitle');

        switch(positionName){
            case 'starter1':
                this.starter1.title = title;
                // this.starter1.setTitle(title);
                break;
            case 'starter2':
                this.starter2.title = title;
                break;
            case 'starter3':
                this.starter3.title = title;
                break;
            case 'starter4':
                this.starter4.title = title;
                break;
            case 'starter5':
                this.starter5.title = title;
                break;
            case 'setupper1':
                this.setupper1.title = title;
                break;
            case 'setupper2':
                this.setupper2.title = title;
                break;
            case 'setupper3':
                this.setupper3.title = title;
                break;
            case 'setupper4':
                this.setupper4.title = title;
                break;
            case 'closer':
                this.closer.title = title;
                break;
            case 'pitcher_bench':
                this.pitcher_bench.title = title;
                break;
            case 'pitcher_alt1':
                this.pitcher_alt1.title = title;
                break;
            case 'pitcher_alt2':
                this.pitcher_alt2.title = title;
                break;

        }
        
    }

    setBatterTitle(positionName: string, title: any): void {

        console.log('setBatterTitle');

        switch(positionName){
            case 'catcher':
                this.catcher.title = title;
                // this.starter1.setTitle(title);
                break;
            case 'first':
                this.first.title = title;
                break;
            case 'second':
                this.second.title = title;
                break;
            case 'third':
                this.third.title = title;
                break;
            case 'short':
                this.short.title = title;
                break;
            case 'left':
                this.left.title = title;
                break;
            case 'center':
                this.center.title = title;
                break;
            case 'right':
                this.right.title = title;
                break;
            case 'dh':
                this.dh.title = title;
                break;
            case 'batter_bench1':
                this.batter_bench1.title = title;
                break;
            case 'batter_bench2':
                this.batter_bench2.title = title;
                break;
            case 'batter_bench3':
                this.batter_bench3.title = title;
                break;
            case 'batter_bench4':
                this.batter_bench4.title = title;
                break;
            case 'batter_alt1':
                this.batter_alt1.title = title;
                break;
            case 'batter_alt2':
                this.batter_alt2.title = title;
                break;

        }
        
    }

    getStarter1(): Pitcher{
        return this.starter1;
    }
    getStarter2(): Pitcher{
        return this.starter2;
    }
    getStarter3(): Pitcher{
        return this.starter3;
    }
    getStarter4(): Pitcher{
        return this.starter4;
    }
    getStarter5(): Pitcher{
        return this.starter5;
    }
    getSetupper1(): Pitcher{
        return this.setupper1;
    }
    getSetupper2(): Pitcher{
        return this.setupper2;
    }
    getSetupper3(): Pitcher{
        return this.setupper3;
    }
    getSetupper4(): Pitcher{
        return this.setupper4;
    }
    getCloser(): Pitcher{
        return this.closer;
    }
    getPitcherBench(): Pitcher{
        return this.pitcher_bench;
    }
    getPitcherAlt1(): Pitcher{
        return this.pitcher_alt1;
    }
    getPitcherAlt2(): Pitcher{
        return this.pitcher_alt2;
    }
    getCatcher(): Batter{
        return this.catcher;
    }
    getFirst(): Batter{
        return this.first;
    }
    getSecond(): Batter{
        return this.second;
    }
    getThird(): Batter{
        return this.third;
    }
    getShort(): Batter{
        return this.short;
    }
    getLeft(): Batter{
        return this.left;
    }
    getCenter(): Batter{
        return this.center;
    }
    getRight(): Batter{
        return this.right;
    }
    getDh(): Batter{
        return this.dh;
    }
    getBatterBench1(): Batter{
        return this.batter_bench1;
    }
    getBatterBench2(): Batter{
        return this.batter_bench2;
    }
    getBatterBench3(): Batter{
        return this.batter_bench3;
    }
    getBatterBench4(): Batter{
        return this.batter_bench4;
    }
    getBatterAlt1(): Batter{
        return this.batter_alt1;
    }
    getBatterAlt2(): Batter{
        return this.batter_alt2;
    }

    getAllPositionData(): Player[]{
        let data: Player[] = [];

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

        return data;
    }

    getAllPitcherData(): Player[]{
        let data: Player[] = [];

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

        return data;
    }

    getAllBatterData(): Player[]{
        let data: Player[] = [];

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

        return data;
    }

}
