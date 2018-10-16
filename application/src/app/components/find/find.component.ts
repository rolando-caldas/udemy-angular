import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../services/heroes.service";
import {Heroe} from "../../services/heroe.interface";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  private term:string;
  private heroes:Heroe[] = [];

  constructor(private activatedRoute:ActivatedRoute, private heroeService:HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.heroes = this.heroeService.findHeroe(params['term']);
    })

  }

  ngOnInit() {
  }

}
