import { Injectable } from '@angular/core';

import { Consts } from './consts';

import { Player } from './player';
import { Pitcher } from './pitcher';
import { Batter } from './batter';

@Injectable({
  providedIn: 'root'
})
export class ComboCalculateService {

    players: Player[];

    extreme_team_spirits = function(): boolean{
        console.log('extreme_team_spirits');

        // if(this.is_all_same_team(this.players)){

        // }
        return true;
    }

    super_team_spirits = function(): boolean{
        return true;
    }

    combos = [
        {'name': 'extreme_team_spirits', 'score': 2300, 'condition': this.extreme_team_spirits},
        {'name': 'super_team_spirits', 'score': 1650, 'condition': this.super_team_spirits}
    ];


    constructor() {
        console.log('ComboCalculateService constructor');
        this.combos[0].condition();

        // for (let combo in this.combos){
        //     combo.condition();
        // }

    }

    is_all_same_team(players: Player[]): boolean{
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

            if (this.is_central_league(batter) == false){

                result = false;
            }
        }

        return result;
    }


    is_all_pacific_league(batters: Batter[]): boolean {
        console.log('is_all_pacific_league');

        let result = true;

        if (batters == null || batters.length == 0){

            result = false;
        }

        for (var batter in batters){

            if (this.is_pacific_league(batter) == false){

                result = false;
            }
        }

        return result;
    }


    is_pacific_league(player: Player): boolean{
        console.log('is_pacific_league');
        if (player == null){

            return false;
        }

        return this.is_hawks(player) || this.is_seubu(player) || this.is_lotte(player) || this.is_rakuten(player) || this.is_ham(player) || this.is_orix(player);
    }



    is_central_league(player: Player): boolean{
        console.log('is_pacific_league');
        if (player == null){
            return false;
        }

    return this.is_giants(player) || this.is_chunichi(player) || this.is_hansin(player) || this.is_yakuruto(player) || this.is_dena(player) || this.is_hiroshima(player);


    }


    get_number_of_speed_highest_pitcher_player(players: Player[]): number{

        let target = [];

        for (let player in players){
            let speed = this.get_pitch_speed(player)
            let control = this.get_pitch_control(player)
            let stamina = this.get_pitch_stamina(player)

            if (speed >= control && speed >= stamina){

                target.push(player)
            }

        }

        return target.length;
    }


    get_number_of_control_highest_player(players: Player[]): number {
        let target = [];

        for (let player in players){
            let speed = this.get_pitch_speed(player)
            let control = this.get_pitch_control(player)
            let stamina = this.get_pitch_stamina(player)

            if (control >= speed && control >= stamina){
                target.push(player)
            }
        }


        return target.length;

    }



    get_number_of_stamina_highest_player(players: Player[]): number {
        let target = []

        for (let player in players){
            let speed = this.get_pitch_speed(player)
            let control = this.get_pitch_control(player)
            let stamina = this.get_pitch_stamina(player)

            if (stamina >= speed && stamina >= control){                
                target.push(player);
            }
        }


        return target.length;

    }




    get_total_number_of_breakingball(players: Player[]): number {
        let total = 0

        for (let player in players){
            total = total + this.get_number_of_breakingball(player)
        }

        return total
    }




    get_average_number_of_breakingball(players: Player[]): number {

        let total = 0

        for (let player in players){
            total = total + this.get_number_of_breakingball(player)
        }

        return total / players.length;
    }



    get_number_of_b_or_over_breakingball_rank(players: Player[]): number {
        let breaking_ball = ''
        let b_or_better = 0

        for (let player in players){
            breaking_ball += this.get_breakingball(player)
        }

        b_or_better = this.counter(breaking_ball, 'S') + this.counter(breaking_ball, 'A') + this.counter(breaking_ball, 'B');

        return b_or_better;
    }

    counter(str: string, seq: string): number {
        return str.split(seq).length - 1;
    }



    get_number_of_meet_highest_player(players: Player[]): number {
        let target = []

        for (let player in players){
            let meet = this.get_batter_meet(player)
            let power = this.get_batter_power(player)
            let speed = this.get_batter_speed(player)

            if (meet >= power && meet >= speed){
                target.push(player)
            }
        }

        return target.length;

    }



    get_number_of_power_highest_player(players: Player[]): number{

        let target = []

        for (let player in players){
            let meet = this.get_batter_meet(player)
            let power = this.get_batter_power(player)
            let speed = this.get_batter_speed(player)

            if (power >= meet && power >= speed){
                target.push(player)
            }
        }

        return target.length;
    }



    get_number_of_speed_highest_batter_player(players: Player[]): number {

        let target = []

        for (let player in players){
            let meet = this.get_batter_meet(player)
            let power = this.get_batter_power(player)
            let speed = this.get_batter_speed(player)

            if (speed >= meet && speed >= power){
                target.push(player)
            }
        }

        return target.length;

    }



    get_pitch_speed(player: Player): number {
        return player['Speed']
    }

    get_pitch_control(player: Player): number {
        return player['Control']
    }

    get_pitch_stamina(player: Player): number {
        return player['Stamina']
    }

    get_breakingball(player: Player): number {
        return player['BreakingBall']
    }

    get_number_of_breakingball(player: Player): number {
        let breaking = player['BreakingBall']
        return breaking.length;

    }

    get_batter_meet(player: Player): number{
        return player['Meet'];

    }

    get_batter_power(player: Player): number{
        return player['Power'];
    }

    get_batter_speed(player: Player): number{
        return player['Speed'];
    }


    get_team(player: Player): string{
        return player['Team'];
    }

    get_rank(player: Player): string{
        return player['Rank'];
    }

    get_year(player: Player): number {
        return 0;
        // return player['Series'][0:4]
    }


    is_infield(player: Player): boolean {

        if (player != null){
            if ((this.get_left_capability(player) == '') && (this.get_center_capability(player) == '') && (this.get_right_capability(player) == '')){
                return true;
            } else {
                return false;
            }
        }

        return false;

    }

    is_outfield(player: Player): boolean {
        if (player != null){
            if ((this.get_left_capability(player) != '') || (this.get_center_capability(player) != '') || (this.get_right_capability(player) != '')){
                return true;
            } else {
                return false;
            }
        }

        return false;
    }



    get_catcher_capability(player: Player): string {

        if (player !=  null && player['Catch'] != ''){

            return player['Catch'];
        }

        return '';
    }


    get_first_capability(player: Player): string {

        if (player !=  null && player['First'] != ''){

            return player['First'];
        }

        return '';
    }


    get_second_capability(player: Player): string {

        if (player !=  null && player['Second'] != ''){

            return player['Second'];
        }

        return '';
    }


    get_third_capability(player: Player): string {

        if (player !=  null && player['Third'] != ''){

            return player['Third'];
        }

        return '';
    }


    get_short_capability(player: Player): string {

        if (player !=  null && player['Short'] != ''){

            return player['Short'];
        }

        return '';
    }


    get_left_capability(player: Player): string {

        if (player !=  null && player['Left'] != ''){

            return player['Left'];
        }

        return '';
    }


    get_center_capability(player: Player): string {

        if (player !=  null && player['Center'] != ''){

            return player['Center'];
        }

        return '';
    }


    get_right_capability(player: Player): string {

        if (player !=  null && player['Right'] != ''){

            return player['Right'];
        }

        return '';
    }

    is_hawks(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.HAWKS){            
            return true;
        }

        return false;
    }

    is_seubu(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.LIONS){            
            return true;
        }

        return false;
    }

    is_lotte(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.MARINS){            
            return true;
        }

        return false;
    }


    is_rakuten(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.RAKUTEN){            
            return true;
        }

        return false;
    }

    is_ham(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.FIGHTERS){            
            return true;
        }

        return false;
    }

    is_orix(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.BUFFALOWS){            
            return true;
        }

        return false;
    }

    is_giants(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.GIANTS){            
            return true;
        }

        return false;
    }

    is_chunichi(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.DRAGONS){            
            return true;
        }

        return false;
    }

    is_hansin(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.TIGERS){            
            return true;
        }

        return false;
    }

    is_dena(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.BAYSTERS){            
            return true;
        }

        return false;
    }

    is_hiroshima(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.CARP){            
            return true;
        }

        return false;
    }

    is_yakuruto(player: Player): boolean {
        if (player == null){            
            return false;
        }

        if (player['Team'] == Consts.SWALLOWS){            
            return true;
        }

        return false;
    }

}
