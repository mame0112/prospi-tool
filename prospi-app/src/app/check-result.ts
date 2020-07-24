export class CheckResult {

    public static readonly CATEGORY_TEAM_FORAMTION = 'team_formation';

    result: []

    constructor(){}

    initialize(): void {
        this.result['teamFrormation'] = this.teamFrormation();
        // this.result['teamFrormation'] = {'name': null, 'spirits': null}

    }

    addCombos(category: string, combos: any): void {
        this.result[category] = combos;
    }

    teamFrormation(): any {
        let result: any[] = new Array();

        // Judge something

        let item = {}
        item['name'] = '極○○(球団名)魂';
        item['spirits'] = 5;
        result.push(item);

        return result;
    }

}