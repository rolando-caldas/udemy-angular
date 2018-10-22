import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() heroeSelected:EventEmitter<number>

  constructor(private router:Router) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  goToCard() {
    this.heroeSelected.emit(this.id);
    this.router.navigate(['/heroe', this.id]);
  }

}
