"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
var Avenger = /** @class */ (function () {
    function Avenger(name, realName) {
        this.name = "";
        this.team = "";
        this.realName = "";
        this.canFight = false;
        this.fightsWin = 0;
        this.name = name;
        this.realName = realName;
    }
    Avenger.prototype.setTeam = function (team) {
        this.team = team;
    };
    Avenger.prototype.setCanFight = function (canFight) {
        this.canFight = canFight;
    };
    Avenger.prototype.setFightsWin = function (fightsWin) {
        this.fightsWin = fightsWin;
    };
    Avenger = __decorate([
        consola
    ], Avenger);
    return Avenger;
}());
var antman = new Avenger("Antman", "Nombre");
antman.setTeam("Uno");
antman.setCanFight(true);
antman.setFightsWin(10);
