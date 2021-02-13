import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pokemon: any;
  habilities: any[] = [];
  moves: any[] = [];
  mostrar = false;
  mostrar2 = false;
  pokemons: any;
  constructor(private activatedRoute: ActivatedRoute,private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.pokemonService.getPokemonByName("pikachu").then((response) => {
      this.pokemon = response;
      this.habilities = response.abilities;
      this.moves = response.moves;
    })
  }





}
