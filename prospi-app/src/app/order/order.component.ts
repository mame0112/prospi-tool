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
    position: string;

    isPitcherListSelected: boolean = true;

    ngOnInit(): void {
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

}
