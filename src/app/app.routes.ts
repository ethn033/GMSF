import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login', 
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent 
    },
    {
        canActivate: [authGuardGuard],
        path: '',
        component: HomeComponent, // HomeComponent serves as the layout
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent // Component for the dashboard
            },
            {
                path: 'users',
                component: UsersComponent // UsersComponent
            },
            {
                path: '',
                redirectTo: 'dashboard', // Default child route
                pathMatch: 'full'
            }
        ]
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];
