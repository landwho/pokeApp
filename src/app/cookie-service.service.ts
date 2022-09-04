import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor(private cookieService: CookieService) { }


  isLoggedIn(){
    return !!this.cookieService.get('Test');
  }

  removeCookie(){
    this.cookieService.delete('Test');
  }


  isInSession(){
    return !! localStorage.getItem('user');
  }




}
