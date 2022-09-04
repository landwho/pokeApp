import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private cookieService: CookieService, private http:HttpClient) { }


 allPokemon ="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154";
 listAll = "https://pokeapi.co/api/v2/pokemon/"

 listAllPokemon(){
    return this.http.get(this.allPokemon);
 }

 listAllPokemonById(id:any){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id);
 }




}
