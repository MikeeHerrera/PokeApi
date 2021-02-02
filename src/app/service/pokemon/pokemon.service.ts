import { HttpClientService } from '../http-client.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends HttpClientService{
  private  endpoint : any;
  constructor(httpClient : HttpClient,router: Router) {
    super(httpClient, router)
    this.urlBase = environment.endpoints.api;
    this.endpoint = environment.endpoints.pokemon;
  }
  public getPokemonByName(name:any):Promise<any>{
    const url: string = this.endpoint.name
    return this.get(url.replace('_name_',name));
  }
  public getPokemonById(id:any):Promise<any>{
    const url: string = this.endpoint.id;
    return this.get(url.replace('_id_', id));
  }
}
