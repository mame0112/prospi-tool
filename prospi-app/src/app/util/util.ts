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

        if (players == null || players.length == 0){
            result = false;
        }

        let first = '';

        for (var player in players){

            if (first != player['Team']){
                //TODO                
            }

        }

        console.log(result);

        return result;

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