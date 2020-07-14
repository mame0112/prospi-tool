import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { PlayerHolderService } from '../player-holder.service';

import { Util } from '../util/util';

import { Title } from '../title';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

    targetPosition: string;
    isPitcher: boolean;

    util: Util = new Util();

    title: Title = new Title();

    pitcher_rank4_titles: any;
    pitcher_rank3_titles: any;
    pitcher_rank2_titles: any;
    pitcher_rank1_titles: any;

    batter_rank4_titles: any;
    batter_rank3_titles: any;
    batter_rank2_titles: any;
    batter_rank1_titles: any;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private holderService: PlayerHolderService) { }

    ngOnInit(): void {
        this.targetPosition = this.activatedRoute.snapshot.paramMap.get('position');
        console.log(this.targetPosition);

        this.isPitcher = this.util.isPitcher(this.targetPosition);

        if(this.isPitcher){
            this.pitcher_rank4_titles = this.title.getPitcherRank4Titles();
            this.pitcher_rank3_titles = this.title.getPitcherRank3Titles();
            this.pitcher_rank2_titles = this.title.getPitcherRank2Titles();
            this.pitcher_rank1_titles = this.title.getPitcherRank1Titles();
        } else {
            this.batter_rank4_titles = this.title.getBatterRank4Titles();
            this.batter_rank3_titles = this.title.getBatterRank3Titles();
            this.batter_rank2_titles = this.title.getBatterRank2Titles();
            this.batter_rank1_titles = this.title.getBatterRank1Titles();
        }
    }

    setPitcherTitle(titleName: string): void {
        console.log('setPitcherTitle');

        let titleContents = this.title.getPitcherTitleContents(titleName);

        this.holderService.setPitcherTitle(this.targetPosition, titleContents);
        this.router.navigate(['/order']);

    }

    setBatterTitle(titleName: string): void {
        console.log('setBatterTitle');

        let titleContents = this.title.getBatterTitleContents(titleName);

        this.holderService.setBatterTitle(this.targetPosition, titleContents);
        this.router.navigate(['/order']);

    }

}
