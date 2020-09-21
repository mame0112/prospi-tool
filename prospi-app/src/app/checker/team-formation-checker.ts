import { Player } from '../player';

import { Util } from '../util/util';

export class TeamFormationChecker {

    // result: [];

    constructor(){}

    check(players: Player[]): number {
        console.log('TeamFormationChecker check');
        console.log(players);

        if (this.extreme_team_spirits(players)){
            return 5;
        }

        return 0;

    }

    // extreme_team_spirits = function(): boolean{
    //     console.log('extreme_team_spirits');
    //     return true;
    // }

    // super_team_spirits = function(): boolean{
    //     return true;
    // }

    // 全選手が同じチーム所属選手かつ、ポジション適性が一致
    extreme_team_spirits(players: Player[]): boolean {

        console.log('extreme_team_spirits');

        let ranks = Util.get_number_of_each_rank_player(players);
        console.log(ranks);


        if(Util.is_all_same_team(players) && Util.is_all_appropriate_position(players)){
            let ranks = Util.get_number_of_each_rank_player(players);
            console.log(ranks);
            return true;
        }

        return false;
    }


}