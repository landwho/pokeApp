import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { CookieGuard } from './cookie.guard';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SessionGuard } from './session.guard';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: FormComponent, canActivate: [CookieGuard] },
  { path: 'choose', component: SettingsComponent, canActivate: [SessionGuard] },
  { path: 'home', component: HomeComponent, canActivate: [SessionGuard] },
  { path: '**', redirectTo: '' }
];

const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
