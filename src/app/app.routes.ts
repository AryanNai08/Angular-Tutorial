import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponenet } from './profile/profile';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'profile',component:ProfileComponenet}
];

