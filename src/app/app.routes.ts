import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponenet } from './profile/profile';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { PassData } from './pass-data/pass-data';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'profile',component:ProfileComponenet},
    {path:'',component:Home},
    {path:'pass-data',component:PassData},
    {path:'pass-data/:name',component:PassData},
    {path:'**',component:PageNotFound}
];

