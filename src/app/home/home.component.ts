import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  storage:any;
  user:any;

  pokemon:any;
  myTeam:any;
  age:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.age = localStorage.getItem('age')

    this.storage =  localStorage.getItem('user');
    this.user = JSON.parse(this.storage)
  
    this.pokemon = localStorage.getItem('myPokemons');
    this.myTeam = JSON.parse(this.pokemon);

  }

  edit(){
    this.router.navigate(['choose']);
  }
  profile(){
    this.router.navigate(['settings']);
  }

}
