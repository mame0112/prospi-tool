import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Pitcher } from '../pitcher';
import { PlayerHolderService } from '../player-holder.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    constructor(private holderService: PlayerHolderService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    // starter1: Pitcher;
    // starter2: Pitcher;
    // starter3: Pitcher;
    // starter4: Pitcher;
    // starter5: Pitcher;
    // setupper1: Pitcher;
    // setupper2: Pitcher;
    // setupper3: Pitcher;
    // setupper4: Pitcher;
    // closer: Pitcher;
    // pitcher_bench: Pitcher;

    position: string;

    isPitcherListSelected: boolean = true;

    ngOnInit(): void {
        // this.position = 'starter1';
        // let position = +this.activatedRoute.snapshot.paramMap.get('position');
        // console.log(position);
        // this.starter1 = this.holderService.getStarter1();
        // this.starter2 = this.holderService.getStarter2();
        // this.starter3 = this.holderService.getStarter3();
        // this.starter4 = this.holderService.getStarter4();
        // this.starter5 = this.holderService.getStarter5();
        // this.setupper1 = this.holderService.getSetupper1();
        // this.setupper2 = this.holderService.getSetupper2();
        // this.setupper3 = this.holderService.getSetupper3();
        // this.setupper4 = this.holderService.getSetupper4();
        // this.closer = this.holderService.getCloser();
        // this.pitcher_bench = this.holderService.getPitcherBench();
        // console.log(this.starter1);

        // this.isPitcherListSelected = true;
    }

    selectPitcher(): void {
        this.isPitcherListSelected = true;

    }

    selectBatter(): void {
        this.isPitcherListSelected = false;
    }

    calcCombo(): void {
        console.log('calcCombo');
        this.router.navigate(['/combo']);
    }

    // selectStarter1(): void {
    //     console.log('selectStarter1');
    //     this.router.navigate(['/landing', 'starter1']);
    // }
    // selectStarter2(): void {
    //     console.log('selectStarter2');
    //     this.router.navigate(['/landing', 'starter2']);
    // }
    // selectStarter3(): void {
    //     console.log('selectStarter3');
    //     this.router.navigate(['/landing', 'starter3']);
    // }
    // selectStarter4(): void {
    //     console.log('selectStarter4');
    //     this.router.navigate(['/landing', 'starter4']);
    // }
    // selectStarter5(): void {
    //     console.log('selectStarter5');
    //     this.router.navigate(['/landing', 'starter5']);
    // }

    // selectSetupper1(): void {
    //     console.log('selectSetupper1');
    //     this.router.navigate(['/landing', 'setupper1']);
    // }
    // selectSetupper2(): void {
    //     console.log('selectSetupper2');
    //     this.router.navigate(['/landing', 'setupper2']);
    // }
    // selectSetupper3(): void {
    //     console.log('selectSetupper3');
    //     this.router.navigate(['/landing', 'setupper3']);
    // }
    // selectSetupper4(): void {
    //     console.log('selectSetupper4');
    //     this.router.navigate(['/landing', 'setupper4']);
    // }
    // selectCloser(): void {
    //     console.log('selectCloser');
    //     this.router.navigate(['/landing', 'closer']);
    // }
    // selectPitcherBench(): void {
    //     console.log('selectPitcherBench');
    //     this.router.navigate(['/landing', 'pitcher_bench']);
    // }


}
