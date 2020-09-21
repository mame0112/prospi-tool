import { Player } from './player';

export class Batter implements Player{
    id: string;
    uuid: string;
    team: string;
    position: string;
    name: string;
    series: string;
    meet: string;
    power: string;
    speed: string;
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
    ballistic: string;
    catcher: string;
    first: string;
    second: string;
    third: string;
    short: string;
    left: string;
    center: string;
    right: string;
    title: any;
    rank: string;

    constructor(id: string, uuid: string, team: string, position: string, name: string, series: string, 
        meet: string, power: string, speed: string, majorTotal: string, catching: string, throwAccuracy: string, throwPower: string, minorTotal: string, total: string,
         spirits: string, allPoint: string, bat: string, cost: string, ballistic: string, catcher: string, first: string, second: string, third: string, short: string, left: string, center: string, right: string, rank: string){
        // super(id, uuid, team, position, name, series, 
        // meet, power, speed, majorTotal, catching, throwAccuracy, throwPower, minorTotal, total,
        //  spirits, allPoint, bat, cost, ballistic, catcher, first, second, third, short, left, center, right);

        this.id = id;
        this.uuid = uuid;
        this.team = team;
        this.position = position;
        this.name = name;
        this.series = series;
        this.meet = meet;
        this.power = power;
        this.speed = speed;
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
        this.ballistic = ballistic;
        this.catcher = catcher;
        this.first = first;
        this.second = second;
        this.third = third;
        this.short = short;
        this.left = left;
        this.center = center;
        this.right = right;
        this.rank = rank;

    }

}