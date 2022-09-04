import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieServiceService } from './cookie-service.service';

@Injectable({
  providedIn: 'root'
})
export class CookieGuard implements CanActivate {
 
  constructor(private router:Router, private cookieService: CookieServiceService){}
  
  canActivate(): boolean{
    if(this.cookieService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['inicio']);
      return false;
    }
  }
  
}
