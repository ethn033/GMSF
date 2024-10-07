import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { LoadingService } from '../../../services/shared/loading.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-side-bar',
    standalone: true,
    imports: [CommonModule, PanelMenuModule, RouterLink, RouterLinkActive],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
    items: MenuItem[] | undefined;
    
    constructor(public utils: LoadingService, private router: Router) {
        
    }
    
    ngOnInit() {
        this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/dashboard']);
                }
            },
            {
                label: 'Users',
                icon: 'pi pi-user',
                command: () => {
                    this.router.navigate(['/users']);
                }
            },
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Installation',
                        icon: 'pi pi-eraser',
                        route: '/installation'
                    },
                    {
                        label: 'Configuration',
                        icon: 'pi pi-heart',
                        route: '/configuration'
                    }
                ]
            },
            {
                label: 'Programmatic',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-star',
                        url: 'https://angular.io/'
                    },
                    {
                        label: 'Vite.js',
                        icon: 'pi pi-bookmark',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];
    }
    
}
