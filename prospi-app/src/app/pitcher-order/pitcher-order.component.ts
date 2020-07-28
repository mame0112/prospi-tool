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

            for (let i in params){
                if(params[i].value != null){
                    this.holder.push({key:params[i].key, label:this.createLabel(Number(i)), value: params[i].value.player});
                } else {
                    this.holder.push({key:params[i].key, label:this.createLabel(Number(i)), value: null});
                }
            }


            // this.holder.push({key:'starter2', label:'先発2', value: params[1].value.player});
            // this.holder.push({key:'starter3', label:'先発3', value: params[2].value.player});
            // this.holder.push({key:'starter4', label:'先発4', value: params[3].value.player});
            // this.holder.push({key:'starter5', label:'先発5', value: params[4].value.player});
            // this.holder.push({key:'setupper1', label:'中継ぎ1', value: params[5].value.player});
            // this.holder.push({key:'setupper2', label:'中継ぎ2', value: params[6].value.player});
            // this.holder.push({key:'setupper3', label:'中継ぎ3', value: params[7].value.player});
            // this.holder.push({key:'setupper4', label:'中継ぎ4', value: params[8].value.player});
            // this.holder.push({key:'closer', label:'抑え', value: params[9].value.player});
            // this.holder.push({key:'pitcher_bench', label:'控え', value: params[10].value.player});
            // this.holder_alt.push({key:'pitcher_alt1', label:'候補1', value: params[11].value.player});
            // this.holder_alt.push({key:'pitcher_alt2', label:'候補2', value: params[12].value.player});

        });
    }

    createLabel(key: number): string {

        let result = null;

        switch(key){
            case 0:
            result = '先発1';
            break;
            case 1:
            result = '先発2';
            break;
            case 2:
            result = '先発3';
            break;
            case 3:
            result = '先発4';
            break;
            case 4:
            result = '先発5';
            break;
            case 5:
            result = '中継ぎ1';
            break;
            case 6:
            result = '中継ぎ2';
            break;
            case 7:
            result = '中継ぎ3';
            break;
            case 8:
            result = '中継ぎ4';
            break;
            case 9:
            result = '抑え';
            break;
            case 10:
            result = '控え';
            break;
            case 11:
            result = '候補1';
            break;
            case 12:
            result = '候補2';
            break;

        }

        return result;
    }

    calcValue(original: string, additional: string): number {
        return parseInt(original)+parseInt(additional);
    }

    deleteCookie(): void {
        this.holderService.deleteAllCookies();
    }


}
