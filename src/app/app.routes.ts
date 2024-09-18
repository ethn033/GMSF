import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/home/not-found/not-found.component';

export const routes: Routes = [
    { 
        path: '',   
        redirectTo: 'home', 
        pathMatch: 'full',
        title: 'Home'
    },
    {
        path: 'home',
        component: AppComponent
    },
    { path: '**', 
        component: NotFoundComponent
    }
];
