import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [InputTextModule, ButtonModule, RippleModule, CommonModule, MenuModule, FormsModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

    options = [
        {
            items: [
                {
                    label: 'Profile',
                    icon: 'pi pi-user',
                    command: () => this.router.navigate(['/profile'])
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    command: () => this.logout()
                }
            ]
        }
    ];

    constructor(private auth: AuthService, private router: Router) {
        
    }
    
    
    
    ngOnInit() {
        
    }
    
    logout() {
        this.auth.logoutUser();
        this.router.navigate(['/login'], {replaceUrl: true});
    }
    
}
