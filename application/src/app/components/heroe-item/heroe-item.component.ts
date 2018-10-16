import {Component, Input, OnInit} from '@angular/core';
import {Heroe} from "../../services/heroe.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroe-item',
  templateUrl: './heroe-item.component.html',
  styleUrls: ['./heroe-item.component.css']
})
export class HeroeItemComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() id:number;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToCard(id:number) {
    this.router.navigate(['/heroe', id]);
  }

}
