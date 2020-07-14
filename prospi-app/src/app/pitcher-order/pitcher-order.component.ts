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

    position: string;

    constructor(private holderService: PlayerHolderService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        // this.position = 'starter1';
        // let position = +this.activatedRoute.snapshot.paramMap.get('position');
        // console.log(position);
        this.starter1 = this.holderService.getStarter1();
        this.starter2 = this.holderService.getStarter2();
        this.starter3 = this.holderService.getStarter3();
        this.starter4 = this.holderService.getStarter4();
        this.starter5 = this.holderService.getStarter5();
        this.setupper1 = this.holderService.getSetupper1();
        this.setupper2 = this.holderService.getSetupper2();
        this.setupper3 = this.holderService.getSetupper3();
        this.setupper4 = this.holderService.getSetupper4();
        this.closer = this.holderService.getCloser();
        this.pitcher_bench = this.holderService.getPitcherBench();
        console.log(this.starter1);

        this.holder.push({key:'starter1', label:'先発1', value: this.starter1});
        this.holder.push({key:'starter2', label:'先発2', value: this.starter2});
        this.holder.push({key:'starter3', label:'先発3', value: this.starter3});
        this.holder.push({key:'starter4', label:'先発4', value: this.starter4});
        this.holder.push({key:'starter5', label:'先発5', value: this.starter5});
        this.holder.push({key:'setupper1', label:'中継ぎ1', value: this.setupper1});
        this.holder.push({key:'setupper2', label:'中継ぎ2', value: this.setupper2});
        this.holder.push({key:'setupper3', label:'中継ぎ3', value: this.setupper3});
        this.holder.push({key:'setupper4', label:'中継ぎ4', value: this.setupper4});
        this.holder.push({key:'closer', label:'抑え', value: this.closer});
        this.holder.push({key:'pitcher_bench', label:'控え', value: this.pitcher_bench});


    }

    calcValue(original: string, additional: string): number {
        return parseInt(original)+parseInt(additional);
    }


}
