import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Batter } from '../batter';
import { PlayerHolderService } from '../player-holder.service';

@Component({
  selector: 'app-batter-order',
  templateUrl: './batter-order.component.html',
  styleUrls: ['./batter-order.component.css']
})
export class BatterOrderComponent implements OnInit {

    holder = [];

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

    position: string;

    constructor(private holderService: PlayerHolderService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.catcher = this.holderService.getCatcher();
        this.first = this.holderService.getFirst();
        this.second = this.holderService.getSecond();
        this.third = this.holderService.getThird();
        this.short = this.holderService.getShort();
        this.left = this.holderService.getLeft();
        this.center = this.holderService.getCenter();
        this.right = this.holderService.getRight();
        this.dh = this.holderService.getDh();
        this.batter_bench1 = this.holderService.getBatterBench1();
        this.batter_bench2 = this.holderService.getBatterBench2();
        this.batter_bench3 = this.holderService.getBatterBench3();
        this.batter_bench4 = this.holderService.getBatterBench4();

        this.holder.push({key:'catcher', label:'キャッチャー', value: this.catcher});
        this.holder.push({key:'first', label:'ファースト', value: this.first});
        this.holder.push({key:'second', label:'セカンド', value: this.second});
        this.holder.push({key:'third', label:'サード', value: this.third});
        this.holder.push({key:'short', label:'ショート', value: this.short});
        this.holder.push({key:'left', label:'レフト', value: this.left});
        this.holder.push({key:'center', label:'センター', value: this.center});
        this.holder.push({key:'right', label:'ライト', value: this.right});
        this.holder.push({key:'dh', label:'DH', value: this.dh});
        this.holder.push({key:'batter_bench1', label:'控え1', value: this.batter_bench1});
        this.holder.push({key:'batter_bench2', label:'控え2', value: this.batter_bench2});
        this.holder.push({key:'batter_bench3', label:'控え3', value: this.batter_bench3});
        this.holder.push({key:'batter_bench4', label:'控え4', value: this.batter_bench4});

    }

    calcValue(original: string, additional: string): number {
        return parseInt(original)+parseInt(additional);
    }

}
