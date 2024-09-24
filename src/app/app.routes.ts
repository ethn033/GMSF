import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { 
        path: '',   
        redirectTo: 'home', 
        pathMatch: 'full',
        title: 'Home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { path: '**', 
        component: NotFoundComponent
    }
];
