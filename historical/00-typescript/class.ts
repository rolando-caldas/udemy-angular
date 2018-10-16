
function consola ( constructor:Function ) {
    console.log(constructor)
}

@consola
class Avenger {
    private name:string = "";
    private team:string = "";
    private realName:string = "";

    private canFight:boolean = false;
    private fightsWin:number = 0;

    constructor(name:string, realName:string) {
        this.name = name;
        this.realName = realName;
    }

    setTeam(team:string) {
        this.team = team;
    }

    setCanFight(canFight:boolean) {
        this.canFight = canFight;
    }

    setFightsWin(fightsWin:number) {
        this.fightsWin = fightsWin;
    }

}

let antman:Avenger = new Avenger("Antman", "Nombre");
antman.setTeam("Uno");
antman.setCanFight(true);
antman.setFightsWin(10);
