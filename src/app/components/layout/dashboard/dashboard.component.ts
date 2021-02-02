import { PokemonService } from './../../../service/pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  pokemon: any;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.init()
  }

  init(){
    this.pokemonService.getPokemonByName('pikachu')
    .then(res => this.pokemon= res)
    .catch(err => console.error(err))
  }

}
