import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {AboutComponent} from "./components/about/about.component";
import {HeroeCardComponent} from "./components/heroe-card/heroe-card.component";
import {FindComponent} from "./components/find/find.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeCardComponent},
  { path: 'about', component: AboutComponent},
  { path: 'find/:term', component: FindComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
