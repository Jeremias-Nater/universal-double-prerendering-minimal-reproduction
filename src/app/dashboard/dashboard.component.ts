import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
} )
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor( private heroService: HeroService ) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = [
    //   {
    //     'id': 12,
    //     'name': 'Narco',
    //   },
    //   {
    //     'id': 13,
    //     'name': 'Bombasto',
    //   },
    //   {
    //     'id': 14,
    //     'name': 'Celeritas',
    //   },
    //   {
    //     'id': 15,
    //     'name': 'Magneta',
    //   },
    // ];
    const start = performance.now();
    this.heroService.getHeroes()
      .subscribe( heroes => {
        console.log( 'hi?' );
        this.heroes = heroes.slice( 1, 5 );
        console.log( this.heroes );
        console.log( 'request took: ', performance.now() - start );
      } );
  }
}
