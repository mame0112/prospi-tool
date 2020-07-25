import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient } from "@angular/common/http";

import { Util } from './util/util';

import { Player } from './player';
import { Pitcher } from './pitcher';
import { Batter } from './batter';

@Injectable({
  providedIn: 'root'
})
export class PlayerListLoaderService {

    pitcherArray: Pitcher[] = [];
    batterArray: Batter[] = [];

    constructor(private http: HttpClient) {
        // this.initialize();
    }

    loadPitcherCandidateList(): Observable<any> {

        if(this.pitcherArray.length != 0){
            return new Observable((observable)=> {
                observable.next(this.pitcherArray);
                observable.complete();
            });
        }

        return new Observable((observable) => {
            this.http.get('assets/pitcher.csv', {responseType: 'text'})
            .subscribe(
                data => {
                    let csvToRowArray = data.split("\n");
                    for (let index = 1; index < csvToRowArray.length - 1; index++) {
                      let row = csvToRowArray[index].split(",");
                      // console.log(row[0]);
                      this.pitcherArray.push(new Pitcher(Util.createId(row[0]), this.createUuid(row[0], row[2], row[3]), row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[16], row[17], row[18], row[19], row[20]));
                    }
                    observable.next(this.pitcherArray);
                    observable.complete();
                },
                error => {
                    console.log(error);
                }
            );
        });
    }

    // loadPitcherCandidateList(): void {
    //     console.log('loadPitcherCandidateList');

    //     this.http.get('assets/pitcher.csv', {responseType: 'text'})
    //     .subscribe(
    //         data => {
    //             let csvToRowArray = data.split("\n");
    //             for (let index = 1; index < csvToRowArray.length - 1; index++) {
    //               let row = csvToRowArray[index].split(",");
    //               // console.log(row[0]);
    //               this.pitcherArray.push(new Pitcher(Util.createId(row[0]), this.createUuid(row[0], row[2], row[3]), row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[16], row[17], row[18], row[19], row[20]));
    //             }
    //             return this.pitcherArray;
    //           // this.targetPithers = this.pitcherArray
    //           // this.targetPithers = JSON.parse(JSON.stringify(this.pitcherArray));
    //           // this.listItem = JSON.parse(JSON.stringify(this.pitcherArray));
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //     );
    // }

    loadBatterCandidateList(): Observable<any> {
        console.log('loadBatterCandidateList');

        if (this.batterArray.length != 0){
            return new Observable((observable)=>{
                observable.next(this.batterArray);
                observable.complete();
            });
        }

        return new Observable((observable)=>
        this.http.get('assets/batter.csv', {responseType: 'text'})
        .subscribe(
            data => {
                let csvToRowArray = data.split("\n");
                for (let index = 1; index < csvToRowArray.length - 1; index++) {
                  let row = csvToRowArray[index].split(",");
                  this.batterArray.push(new Batter(Util.createId(row[0]), this.createUuid(row[0], row[2], row[3]), row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[16], row[17], row[18], row[19], row[20], row[21], row[22], row[23], row[24], row[25]));
                }
                observable.next(this.batterArray);
                observable.complete();
            },
            error => {
                console.log(error);
            }
        ));
    }

    createUuid(team: string, name: string, series: string): string{
        // return null;
        return btoa(unescape(encodeURIComponent(team+name+series)));
    }

}
