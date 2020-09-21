import { Component, OnInit } from '@angular/core';

import { Consts } from '../consts';

import { Player } from '../player';
import { Pitcher } from '../pitcher';
import { Batter } from '../batter';

export class Util {

    constructor() { }

    ngOnInit(): void {
    }

    static createId(team: string): string{
        let id = null;

        switch(team){
            case '西':
                id = Consts.LIONS;
                break;
            case 'ソ':
                id = Consts.HAWKS;
                break;
            case 'ロ':
                id = Consts.MARINS;
                break;
            case 'オ':
                id = Consts.BUFFALOWS;
                break;
            case '楽':
                id = Consts.RAKUTEN;
                break;
            case '日':
                id = Consts.FIGHTERS;
                break;
            case '巨':
                id = Consts.GIANTS;
                break;
            case 'De':
                id = Consts.BAYSTERS;
                break;
            case '神':
                id = Consts.TIGERS;
                break;
            case '広':
                id = Consts.CARP;
                break;
            case '中':
                id = Consts.DRAGONS;
                break;
            case 'ヤ':
                id = Consts.SWALLOWS;
                break;

        }

        return id;
    }


    isPitcher(targetPosition: string): boolean {
        if (targetPosition != null){
            if (targetPosition == 'starter1' || targetPosition == 'starter2' || targetPosition == 'starter3' || targetPosition == 'starter4' || targetPosition == 'starter5' || targetPosition == 'setupper1' || targetPosition == 'setupper2' || targetPosition == 'setupper3' || targetPosition == 'setupper4' || targetPosition == 'closer' || targetPosition == 'pitcher_bench'){
                console.log('Pitcher');
                return true;
            }
            else {
               console.log('Batter');
                return false;
            }
        }
        return true;
    }

  static is_all_same_team(players: Player[]): boolean{
        console.log('is_kiwami_team_spirits');

        let result = true;
        let team = null;

        if (players == null || players.length == 0){
            result = false;
        }

        for (var i in players){
            if(players[i]['value'].player != null){
                if(team != null) {
                    if(team != players[i]['value'].player.team){
                        console.log(team);
                        console.log(players[i]['value'].player.team);
                        console.log('---');
                        result = false;
                        break;
                    }
                } else {
                    team = players[i]['value'].player.team;
                }
            }
        }

        return result;

    }

    static is_all_appropriate_position(players: Player[]): boolean {
        console.log('is_all_appropriate_position');

        let result = true;

        if (players == null || players.length == 0){
            return false;
        }

        for (var i in players){
            if(players[i]['value'] != null && players[i]['value'].player != null){
                if (Util.is_appropriate_position(players[i]['key'], players[i]['value'].player) != true) {
                    return false;
                }
            }
        }

        return false;
    }


    is_all_central_league(batters: Batter[]): boolean {
        console.log('is_all_central_league')

        let result = true;

        if (batters == null || batters.length == 0){

            result = false;
        }

        for (var batter in batters){

            if (Util.is_central_league(batter) == false){

                result = false;
            }
        }

        return result;
    }


    static is_all_pacific_league(batters: Batter[]): boolean {
        console.log('is_all_pacific_league');

        let result = true;

        if (batters == null || batters.length == 0){

            result = false;
        }

        for (var batter in batters){

            if (Util.is_pacific_league(batter) == false){

                result = false;
            }
        }

        return result;
    }


    static is_pacific_league(player: Player): boolean{
        console.log('is_pacific_league');
        if (player == null){

            return false;
        }

        return Util.is_hawks(player) || Util.is_seubu(player) || Util.is_lotte(player) || Util.is_rakuten(player) || Util.is_ham(player) || Util.is_orix(player);
    }



    static is_central_league(player: Player): boolean{
        console.log('is_pacific_league');
        if (player == null){
            return false;
        }

    return Util.is_giants(player) || Util.is_chunichi(player) || Util.is_hansin(player) || Util.is_yakuruto(player) || Util.is_dena(player) || Util.is_hiroshima(player);


    }

    static is_appropriate_position(position: string, player: Player): boolean {
        console.log('is_appropriate_position');

        if (position == null && player == null) {
            console.log('position or player is null');
            return;
        }
        switch(position) {
            case Consts.STARTER1:
            case Consts.STARTER2:
            case Consts.STARTER3:
            case Consts.STARTER4:
                return Util.is_starter_appropriate(player);
            case Consts.SETUPPER1:
            case Consts.SETUPPER2:
            case Consts.SETUPPER3:
            case Consts.SETUPPER4:
                return Util.is_setupper_appropriate(player);
            case Consts.CLOSESR:
                return Util.is_closer_appropriate(player);
            case Consts.FIRST:
                return Util.is_first_appropriate(player);
            case Consts.SECOND:
                return Util.is_second_appropriate(player);
            case Consts.THIRD:
                return Util.is_third_appropriate(player);
            case Consts.SHORT:
                return Util.is_short_appropriate(player);
            case Consts.LEFT:
                return Util.is_left_appropriate(player);
            case Consts.CENTER:
                return Util.is_center_appropriate(player);
            case Consts.RIGHT:
                return Util.is_right_appropriate(player);
                default:
                // For others, nothing to check
                return true;
        }

        return false;
    }

    static get_number_of_each_rank_player(players: Player[]): object {
        console.log('get_number_of_each_rank_player');

        let s_num = 0;
        let a_num = 0;
        let b_num = 0;
        let c_num = 0;
        let d_num = 0;


        if(players == null || players.length == 0){
            return null;
        }

        for (var i in players){
            if(players[i]['value'] != null && players[i]['value'].player != null){
                switch (Util.get_player_rank(players[i]['value'].player)){
                    case Consts.RANK_S:
                        s_num = s_num + 1;
                        break;
                    case Consts.RANK_A:
                        a_num = a_num + 1;
                        break;
                    case Consts.RANK_B:
                        b_num = b_num + 1;
                        break;
                    case Consts.RANK_C:
                        c_num = c_num + 1;
                        break;
                    case Consts.RANK_D:
                        d_num = d_num + 1;
                        break;

                }
            }
        }

        let result = {
            'S': s_num,
            'A': a_num,
            'B': b_num,
            'C': c_num,
            'D': d_num
        }

        return result;

    }

    static get_average_rank (ranks: object): number {
        console.log('get_average_rank');

        // if(ranks != null){
        //     let result = ranks['S']*2;
        // }

        return 0;
    }


    static get_number_of_speed_highest_pitcher_player(players: Player[]): number{

        let target = [];

        for (let player in players){
            let speed = Util.get_pitch_speed(player)
            let control = Util.get_pitch_control(player)
            let stamina = Util.get_pitch_stamina(player)

            if (speed >= control && speed >= stamina){

                target.push(player)
            }

        }

        return target.length;
    }


    static get_number_of_control_highest_player(players: Player[]): number {
        let target = [];

        for (let player in players){
            let speed = Util.get_pitch_speed(player)
            let control = Util.get_pitch_control(player)
            let stamina = Util.get_pitch_stamina(player)

            if (control >= speed && control >= stamina){
                target.push(player)
            }
        }


        return target.length;

    }



    static get_number_of_stamina_highest_player(players: Player[]): number {
        let target = []

        for (let player in players){
            let speed = Util.get_pitch_speed(player)
            let control = Util.get_pitch_control(player)
            let stamina = Util.get_pitch_stamina(player)

            if (stamina >= speed && stamina >= control){                
                target.push(player);
            }
        }


        return target.length;

    }




    get_total_number_of_breakingball(players: Player[]): number {
        let total = 0

        for (let player in players){
            total = total + Util.get_number_of_breakingball(player)
        }

        return total
    }




    static get_average_number_of_breakingball(players: Player[]): number {

        let total = 0

        for (let player in players){
            total = total + Util.get_number_of_breakingball(player)
        }

        return total / players.length;
    }



    static get_number_of_b_or_over_breakingball_rank(players: Player[]): number {
        let breaking_ball = ''
        let b_or_better = 0

        for (let player in players){
            breaking_ball += Util.get_breakingball(player)
        }

        b_or_better = Util.counter(breaking_ball, 'S') + Util.counter(breaking_ball, 'A') + this.counter(breaking_ball, 'B');

        return b_or_better;
    }

    static counter(str: string, seq: string): number {
        return str.split(seq).length - 1;
    }



    static get_number_of_meet_highest_player(players: Player[]): number {
        let target = []

        for (let player in players){
            let meet = Util.get_batter_meet(player)
            let power = Util.get_batter_power(player)
            let speed = Util.get_batter_speed(player)

            if (meet >= power && meet >= speed){
                target.push(player)
            }
        }

        return target.length;

    }



    static get_number_of_power_highest_player(players: Player[]): number{

        let target = []

        for (let player in players){
            let meet = Util.get_batter_meet(player)
            let power = Util.get_batter_power(player)
            let speed = Util.get_batter_speed(player)

            if (power >= meet && power >= speed){
                target.push(player)
            }
        }

        return target.length;
    }



    static get_number_of_speed_highest_batter_player(players: Player[]): number {

        let target = []

        for (let player in players){
            let meet = Util.get_batter_meet(player)
            let power = Util.get_batter_power(player)
            let speed = Util.get_batter_speed(player)

            if (speed >= meet && speed >= power){
                target.push(player)
            }
        }

        return target.length;

    }


    static get_pitch_speed(player: Player): number {
        return player['Speed']
    }

    static get_pitch_control(player: Player): number {
        return player['Control']
    }

    static get_pitch_stamina(player: Player): number {
        return player['Stamina']
    }

    static get_breakingball(player: Player): number {
        return player['BreakingBall']
    }

    static get_number_of_breakingball(player: Player): number {
        let breaking = player['BreakingBall']
        return breaking.length;

    }

    static get_batter_meet(player: Player): number{
        return player['Meet'];

    }

    static get_batter_power(player: Player): number{
        return player['Power'];
    }

    static get_batter_speed(player: Player): number{
        return player['Speed'];
    }


    static get_team(player: Player): string{
        return player['Team'];
    }

    static get_rank(player: Player): string{
        return player['Rank'];
    }

    static get_year(player: Player): number {
        return 0;
        // return player['Series'][0:4]
    }


    static is_infield(player: Player): boolean {

        if (player != null){
            if ((Util.get_left_capability(player) == '') && (Util.get_center_capability(player) == '') && (this.get_right_capability(player) == '')){
                return true;
            } else {
                return false;
            }
        }

        return false;

    }

    static is_outfield(player: Player): boolean {
        if (player != null){
            if ((Util.get_left_capability(player) != '') || (Util.get_center_capability(player) != '') || (this.get_right_capability(player) != '')){
                return true;
            } else {
                return false;
            }
        }

        return false;
    }



    static get_catcher_capability(player: Player): string {

        if (player !=  null && player['Catch'] != ''){

            return player['Catch'];
        }

        return '';
    }


    static get_first_capability(player: Player): string {

        if (player !=  null && player['First'] != ''){

            return player['First'];
        }

        return '';
    }


    static get_second_capability(player: Player): string {

        if (player !=  null && player['Second'] != ''){

            return player['Second'];
        }

        return '';
    }


    static get_third_capability(player: Player): string {

        if (player !=  null && player['Third'] != ''){

            return player['Third'];
        }

        return '';
    }


    static get_short_capability(player: Player): string {

        if (player !=  null && player['Short'] != ''){

            return player['Short'];
        }

        return '';
    }


    static get_left_capability(player: Player): string {

        if (player !=  null && player['Left'] != ''){

            return player['Left'];
        }

        return '';
    }


    static get_center_capability(player: Player): string {

        if (player !=  null && player['Center'] != ''){

            return player['Center'];
        }

        return '';
    }


    static get_right_capability(player: Player): string {

        if (player !=  null && player['Right'] != ''){

            return player['Right'];
        }

        return '';
    }

    static is_starter_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_STARTER){
                return true;
            }
        }
        return false;
    }

    static is_setupper_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_SETUPPER){
                return true;
            }
        }
        return false;
    }

    static is_closer_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_CLOSER){
                return true;
            }
        }
        return false;
    }

    static is_first_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_FIRST){
                return true;
            }
        }
        return false;
    }

    static is_second_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_SECOND){
                return true;
            }
        }
        return false;
    }

    static is_third_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_THIRD){
                return true;
            }
        }
        return false;
    }

    static is_short_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_SHORT){
                return true;
            }
        }
        return false;
    }

    static is_left_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_LEFT){
                return true;
            }
        }
        return false;
    }

    static is_center_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_CENTER){
                return true;
            }
        }
        return false;
    }

    static is_right_appropriate(player: Player): boolean {
        if(player != null){
            if (player['position'] == Consts.POSITION_RIGHT){
                return true;
            }
        }
        return false;
    }

    static get_player_rank(player: Player): string {
        console.log('get_player_rank');
        if (player != null) {
            console.log(player);
            return player['rank'];
        }
    }

    static is_hawks(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.HAWKS){            
            return true;
        }

        return false;
    }

    static is_seubu(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.LIONS){            
            return true;
        }

        return false;
    }

    static is_lotte(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.MARINS){            
            return true;
        }

        return false;
    }


    static is_rakuten(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.RAKUTEN){            
            return true;
        }

        return false;
    }

    static is_ham(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.FIGHTERS){            
            return true;
        }

        return false;
    }

    static is_orix(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.BUFFALOWS){            
            return true;
        }

        return false;
    }

    static is_giants(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.GIANTS){            
            return true;
        }

        return false;
    }

    static is_chunichi(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.DRAGONS){            
            return true;
        }

        return false;
    }

    static is_hansin(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.TIGERS){            
            return true;
        }

        return false;
    }

    static is_dena(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.BAYSTERS){            
            return true;
        }

        return false;
    }

    static is_hiroshima(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.CARP){            
            return true;
        }

        return false;
    }

    static is_yakuruto(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.SWALLOWS){            
            return true;
        }

        return false;
    }

}