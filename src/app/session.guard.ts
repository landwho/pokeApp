import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieServiceService } from './cookie-service.service';


@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private router:Router, private cookieService: CookieServiceService){}
  
  canActivate(): boolean{
    if(this.cookieService.isInSession()){
      return true;
    }else{
      this.router.navigate(['inicio']);
      return false;
    }
  }
  
}
