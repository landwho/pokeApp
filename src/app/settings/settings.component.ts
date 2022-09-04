import { Component, OnInit } from '@angular/core';
import { SettingService } from './setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _api: SettingService, private router:Router) { }

  data:any;
  result:any;
  sprite:any;
  stats:any;
  pokemonId:any;
  pokemonName:any
  pokemonType:any;
  pokemon:any;
  array:any=[];
  storage:any;
  user:any;
  age:any;
  searchText:any;
  error:any;
  flag: boolean = true;
  loading=true;
  ngOnInit(): void {

    this.age = localStorage.getItem('age');
    this.storage =  localStorage.getItem('user');
    this.user = JSON.parse(this.storage);

    for(let i =1; i<=251;i++){
      this._api.listAllPokemonById(i).subscribe((data) => {
        this.data = data;
        this.pokemonId = this.data.id;
        this.pokemonName= this.data.name;
        this.sprite = this.data.sprites.other.home.front_default
        this.pokemonType = this.data.types;
        this.stats = this.data.stats;      
        this.loading=false;
        this.pokemon = new Pokemon(this.pokemonId,this.pokemonName,this.sprite,this.stats,this.pokemonType);
        this.array.push(this.pokemon);
      });
    }

  }

  pokemonChoosed:any=[];
  choosen:any;
  disabled=false;

  choose(id:any,name:any,sprite:any,stats:any,type:any){

    this.choosen=
      {
        "id": id,
        "name":name,
        "sprite":sprite,
        "stats":stats,
        "type":type
      }
    
      let count = this.pokemonChoosed.length;

      if(this.disabled==false){
        this.pokemonChoosed.push(this.choosen);
        if(count == 2 ){
          this.pokemonChoosed.push(this.choosen);
          this.disabled = true;
          this.flag=false;
        }
      }

  }

  save(){

    localStorage.removeItem('myPokemons');
    if(this.pokemonChoosed.length  >=3){
      let duplicatePokemon = this.pokemonChoosed.reduce((accumalator:any, current:any) => {
        if (!accumalator.some((item:any) => item.id === current.id && item.name === current.name)) {
          accumalator.push(current);
        }
        return accumalator;
      }, []);
      localStorage.setItem('myPokemons', JSON.stringify(duplicatePokemon));
      this.router.navigate(['home']);
    }else{
      this.error = "Debes seleccionar al menos 3 pokemon";
    }
  }

}


export class Pokemon{

  constructor(
    public  id:any,
    public  name:any,
    public  image:any,
    public  stats:[],
    public  types:[]
  ){}

}