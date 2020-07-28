export class UuidUtil{

    createUuid(team: string, name: string, series: string): string{
        return btoa(unescape(encodeURIComponent(team+name+series)));
    }
}