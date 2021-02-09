import { PokemonService } from './../../../service/pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  data: any;
  switcher: any;

  constructor(private pokemonService: PokemonService) {
    this.switcher = 'abilities';
   }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pokemonService.getPokemonByName('pikachu')
      .then((response)=>{
        console.log(response)
        this.data = response;
      })
      .catch(( error:any )=>{
        console.log(error);
      })
  }

  public toggle(e) {
    let elementID: string = e?.path[0]?.id;
    console.log(e?.path[0]?.id);
    if (elementID == 'abilities-tab') {
      this.switcher = 'abilities';
    } else {
      this.switcher = 'moves'
    }
  }
}
