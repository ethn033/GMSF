import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

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
        component: HomeComponent,
        children: [ 
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'vehicles',
                component: VehiclesComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
        ]
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];
