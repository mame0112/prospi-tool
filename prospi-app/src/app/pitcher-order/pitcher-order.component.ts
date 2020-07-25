import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Pitcher } from '../pitcher';
import { PlayerHolderService } from '../player-holder.service';

@Component({
  selector: 'app-pitcher-order',
  templateUrl: './pitcher-order.component.html',
  styleUrls: ['./pitcher-order.component.css']
})
export class PitcherOrderComponent implements OnInit {

    holder = [];
    holder_alt = [];

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

    position: string;

    constructor(private holderService: PlayerHolderService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        console.log('PitcherOrderComponent Oninit');
        // let position = +this.activatedRoute.snapshot.paramMap.get('position');
        // console.log(position);

        this.holderService.loadPitcherOrderList().subscribe(params => {
            console.log(params[0].value);
            this.holder.push({key:'starter1', label:'先発1', value: params[0].value});
            this.holder.push({key:'starter2', label:'先発2', value: params[1].value});
            this.holder.push({key:'starter3', label:'先発3', value: params[2].value});
            this.holder.push({key:'starter4', label:'先発4', value: params[3].value});
            this.holder.push({key:'starter5', label:'先発5', value: params[4].value});
            this.holder.push({key:'setupper1', label:'中継ぎ1', value: params[5].value});
            this.holder.push({key:'setupper2', label:'中継ぎ2', value: params[6].value});
            this.holder.push({key:'setupper3', label:'中継ぎ3', value: params[7].value});
            this.holder.push({key:'setupper4', label:'中継ぎ4', value: params[8].value});
            this.holder.push({key:'closer', label:'抑え', value: params[9].value});
            this.holder.push({key:'pitcher_bench', label:'控え', value: params[10].value});
            this.holder_alt.push({key:'pitcher_alt1', label:'候補1', value: params[11].value});
            this.holder_alt.push({key:'pitcher_alt2', label:'候補2', value: params[12].value});

        });

        // this.holder.push({key:'starter1', label:'先発1', value: this.starter1});
        // this.holder.push({key:'starter2', label:'先発2', value: this.starter2});
        // this.holder.push({key:'starter3', label:'先発3', value: this.starter3});
        // this.holder.push({key:'starter4', label:'先発4', value: this.starter4});
        // this.holder.push({key:'starter5', label:'先発5', value: this.starter5});
        // this.holder.push({key:'setupper1', label:'中継ぎ1', value: this.setupper1});
        // this.holder.push({key:'setupper2', label:'中継ぎ2', value: this.setupper2});
        // this.holder.push({key:'setupper3', label:'中継ぎ3', value: this.setupper3});
        // this.holder.push({key:'setupper4', label:'中継ぎ4', value: this.setupper4});
        // this.holder.push({key:'closer', label:'抑え', value: this.closer});
        // this.holder.push({key:'pitcher_bench', label:'控え', value: this.pitcher_bench});
        // this.holder_alt.push({key:'pitcher_alt1', label:'候補1', value: this.pitcher_alt1});
        // this.holder_alt.push({key:'pitcher_alt2', label:'候補2', value: this.pitcher_alt2});

    }

    calcValue(original: string, additional: string): number {
        return parseInt(original)+parseInt(additional);
    }


}
