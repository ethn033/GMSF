import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full',
        title: 'Home'
    },
    {
        path: 'login',
        component: LoginComponent 
    },
    {
        canActivate: [authGuardGuard],
        path: 'home',
        component: HomeComponent
    },
    { path: '**', 
        component: NotFoundComponent
    }
];
