import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponenet } from './profile/profile';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'profile',component:ProfileComponenet},
    {path:'',component:Home},
    {path:'**',component:PageNotFound}
];

