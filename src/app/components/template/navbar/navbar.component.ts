import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { SubscriptionsService } from '../../../services/subscriptions.service';
import { UtilsService } from '../../../services/shared/utils.service';
import { environment } from '../../../../environments/environment';
import { ApplicationUser } from '../../../models/applicationUser';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [InputTextModule, ButtonModule, RippleModule, CommonModule, MenuModule, FormsModule, InputIconModule, IconFieldModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    applicationUser: ApplicationUser = new ApplicationUser();
    constructor(private auth: AuthService, private sub: SubscriptionsService, private router: Router, private utils: UtilsService) {
        const userProfile = this.utils.getLocalStorage(environment.keys.userProfile);
        if(userProfile) {
            this.applicationUser = JSON.parse(userProfile) as ApplicationUser;
        }
    }
    
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
    
    
    
    ngOnInit() {
        
    }
    
    logout() {
        this.auth.logoutUser();
        this.router.navigate(['/login'], {replaceUrl: true});
    }
    
}
