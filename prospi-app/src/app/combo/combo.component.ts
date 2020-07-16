import { Component, OnInit } from '@angular/core';

import { PlayerHolderService } from '../player-holder.service';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {

  constructor(private holderService: PlayerHolderService) { }

  ngOnInit(): void {
      let player = this.holderService.getAllPositionData();
      console.log(player);
  }

}
