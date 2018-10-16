import {Component} from "@angular/core";


@Component({
  selector: 'app-body',
  templateUrl: './body-component.html'
})
export class BodyComponent {

  show:boolean = true;

  phrase: any = {
    message: 'dfalkj aldjf ladsfj',
    author: 'ad ef'
  };

  characters: string[] = ['Spiderman', 'Venom', 'Dr. Octopus']
}
