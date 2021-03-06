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
    holder_alt = [];

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

    position: string;

    constructor(private holderService: PlayerHolderService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {

        this.holderService.loadBatterOrderList().subscribe(params => {
            console.log(params);
            this.holder.push({key:'catcher', label:'キャッチャー', value: params[0].value});
            this.holder.push({key:'first', label:'ファースト', value: params[1].value});
            this.holder.push({key:'second', label:'セカンド', value: params[2].value});
            this.holder.push({key:'third', label:'サード', value: params[3].value});
            this.holder.push({key:'short', label:'ショート', value: params[4].value});
            this.holder.push({key:'left', label:'レフト', value: params[5].value});
            this.holder.push({key:'center', label:'センター', value: params[6].value});
            this.holder.push({key:'right', label:'ライト', value: params[7].value});
            this.holder.push({key:'dh', label:'DH', value: params[8].value});
            this.holder.push({key:'batter_bench1', label:'控え1', value: params[9].value});
            this.holder.push({key:'batter_bench2', label:'控え2', value: params[10].value});
            this.holder.push({key:'batter_bench3', label:'控え3', value: params[11].value});
            this.holder.push({key:'batter_bench4', label:'控え4', value: params[12].value});
            this.holder_alt.push({key:'batter_alt1', label:'候補1', value: params[13].value});
            this.holder_alt.push({key:'batter_alt2', label:'候補2', value: params[14].value});
        });

        // this.holder.push({key:'catcher', label:'キャッチャー', value: this.catcher});
        // this.holder.push({key:'first', label:'ファースト', value: this.first});
        // this.holder.push({key:'second', label:'セカンド', value: this.second});
        // this.holder.push({key:'third', label:'サード', value: this.third});
        // this.holder.push({key:'short', label:'ショート', value: this.short});
        // this.holder.push({key:'left', label:'レフト', value: this.left});
        // this.holder.push({key:'center', label:'センター', value: this.center});
        // this.holder.push({key:'right', label:'ライト', value: this.right});
        // this.holder.push({key:'dh', label:'DH', value: this.dh});
        // this.holder.push({key:'batter_bench1', label:'控え1', value: this.batter_bench1});
        // this.holder.push({key:'batter_bench2', label:'控え2', value: this.batter_bench2});
        // this.holder.push({key:'batter_bench3', label:'控え3', value: this.batter_bench3});
        // this.holder.push({key:'batter_bench4', label:'控え4', value: this.batter_bench4});
        // this.holder_alt.push({key:'batter_alt1', label:'候補1', value: this.batter_alt1});
        // this.holder_alt.push({key:'batter_alt2', label:'候補2', value: this.batter_alt2});

    }

    calcValue(original: string, additional: string): number {
        return parseInt(original)+parseInt(additional);
    }

}
