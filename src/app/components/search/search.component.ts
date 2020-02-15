import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit{
 
  heroesArr: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroesArr = this._heroesService.buscarHeroes(params['termino']);
    })
  }
  
}
