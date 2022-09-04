import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('myPokemons');
    localStorage.removeItem('age');
  }

  goToSettings(id:any){
    this.cookieService.set('Test', 'My pokemon App');
    localStorage.setItem("age",id)
    this.router.navigate(['settings']);
  }

}
