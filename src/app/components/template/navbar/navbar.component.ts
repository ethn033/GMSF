import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { UtilsService } from '../../../services/shared/utils.service';
import { environment } from '../../../../environments/environment';
import { ApplicationUser } from '../../../models/applicationUser';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [InputTextModule, ButtonModule, RippleModule, CommonModule, ReactiveFormsModule, MenuModule, InputIconModule, IconFieldModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
    searchControl = new FormControl();
    loadSearching: boolean = false;
    applicationUser: ApplicationUser = new ApplicationUser();
    
    subs: Subscription[] = [];
    constructor(private auth: AuthService, private router: Router, private utils: UtilsService) {
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
        const sub0 = this.searchControl.valueChanges
        .pipe(
            debounceTime(400),
            distinctUntilChanged()
        )
        .subscribe(value => {
            this.loadSearching = false;
            if (value && value.length >= 2) {
                this.loadSearching = true;
                this.performSearch(value);
            }
        });
        
        const sub1 = this.searchControl.valueChanges.subscribe(() => {
            this.loadSearching = false; 
        });
        
        this.subs.push(sub0);
        this.subs.push(sub1);
    }
    
    performSearch(query: string) {
        
    }
    
    logout() {
        this.auth.logoutUser();
        this.router.navigate(['/login'], {replaceUrl: true});
    }
    
    ngOnDestroy(): void {
        this.subs.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
