import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon/pokemon.service';
import {MatDialog} from '@angular/material/dialog';

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
  data =[];
  // status:any;
  constructor(private activatedRoute: ActivatedRoute,private pokemonService: PokemonService,
    public dialog: MatDialog) {

  }

  ngOnInit() {
 }
 
muestra(event){
  this.data =[];
  this.data.push(event.data)
  console.log(this.data)
  // this.status == true; 

}
  init(event) {
      this.pokemonService.getPokemonByName(event).then((response) => {
        console.log(response)
      this.pokemon = response;
      this.habilities = response.abilities;
      this.moves = response.moves;
    })
  }





}
