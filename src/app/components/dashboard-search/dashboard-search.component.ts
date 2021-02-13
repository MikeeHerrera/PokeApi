import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../../pokemon/pokemon.service";

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.css']
})
export class DashboardSearchComponent implements OnInit {

  poke: any;
  searchResult: any;
  mostrar = false;
  mostrar2 = false;
  abilitie: any;
  move: any;

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchResult = params["searchResult"]
      this.poke = this.pokemonService.getPokemonByName(this.searchResult).then((response) => {
        this.poke = response;
        this.move = response.moves;
        this.abilitie = response.abilities;
        console.log(this.poke);
      });
    })

  }

}
