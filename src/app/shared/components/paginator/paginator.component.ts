import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/pokemon/pokemon.service';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  limit;
  offset;
  total;
  
  handlePage
@Output() data = new EventEmitter
   
  constructor(public pokemonService: PokemonService) { }

  ngOnInit() {
  this.limit = 5;
this.offset = (Number(5)) +1 * Number(5)
// this.data.emit({limit:this.limit, offset:this.offset})
this.onPageActivated()

  }


  pasar(event){
this.data.emit({datos:'Hola'})
console.log(event)
  }

datos(event:PageEvent){
console.log(event)
this.limit = event.pageSize;
this.offset = (Number(event.pageIndex)) +1 * Number(event.pageSize)

this.onPageActivated()
}


  onPageActivated() {
    // console.log(event)
    // this.limit = event.pageSize;
    // this.offset = (Number(event.pageIndex)) +1 * Number(event.pageSize)
    this.pokemonService.getPokemonByPage(this.limit, this.offset).then((res) => {
      this.data.emit({data:res.results})

      console.log(res)
      this.total = res.count;
    }).catch((err: any) => {
      console.log(err)
    })
    console.log('limit', this.limit, 'offset', this.offset)
  }
}
