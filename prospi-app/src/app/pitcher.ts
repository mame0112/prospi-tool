import { Player } from './player';

export class Pitcher implements Player{
    id: string;
    uuid: string;
    team: string;
    position: string;
    name: string;
    series: string;
    speed: string;
    control: string;
    stamina: string;
    majorTotal: string;
    catching: string;
    throwAccuracy: string;
    throwPower: string;
    minorTotal: string;
    total: string;
    spirits: string;
    allPoint: string;
    bat: string;
    cost: string;
    breakingBall: string;
    starter: string;
    setupper: string;
    closer: string;
    title: any;
    rank: any;

    constructor(id: string, uuid: string, team: string, position: string, name: string, series: string, speed: string, control: string, stamina: string, majorTotal: string, catching: string, throwAccuracy: string, throwPower: string, minorTotal: string, total: string, spirits: string, allPoint: string, bat: string, cost: string, breakingBall: string, starter: string, setupper: string, closer: string, rank: string){
        this.id = id;
        this.uuid = uuid;
        this.team = team;
        this.position = position;
        this.name = name;
        this.series = series;
        this.speed = speed;
        this.control = control;
        this.stamina = stamina;
        this.majorTotal = majorTotal;
        this.catching = catching;
        this.throwAccuracy = throwAccuracy;
        this.throwPower = throwPower;
        this.minorTotal = minorTotal;
        this.total = total;
        this.spirits = spirits;
        this.allPoint = allPoint;
        this.bat = bat;
        this.cost = cost;
        this.breakingBall = breakingBall;
        this.starter = starter;
        this.setupper = setupper
        this.closer = closer
        this.rank = rank;

    }

}