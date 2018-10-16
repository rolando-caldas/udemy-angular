import { Component, OnInit } from '@angular/core';
import {HeroesService} from "../../services/heroes.service";
import {Heroe} from "../../services/heroe.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private heroesService:HeroesService,
              private router:Router) {

  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  logger(item) {
    console.log(item);
  }
}
