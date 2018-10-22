import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../services/heroes.service";
import {Heroe} from "../../services/heroe.interface";

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  private heroe:Heroe;

  constructor(private activatedRoute:ActivatedRoute, private heroeService:HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params['id'])
    })

  }

  ngOnInit() {
  }

}
