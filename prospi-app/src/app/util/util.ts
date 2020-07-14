import { Component, OnInit } from '@angular/core';

export class Util {

    constructor() { }

    ngOnInit(): void {
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

}