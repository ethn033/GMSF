import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { DockModule } from 'primeng/dock';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { LoadingService } from '../../../services/shared/loading.service';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MenuModule, BadgeModule, RippleModule, AvatarModule, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  items: MenuItem[] | undefined;
  
  constructor(public utils: LoadingService) {
    
  }
  
  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Inventory',
            icon: 'pi pi-plus',
            shortcut: '⌘+N'
          },
          {
            label: 'Users',
            icon: 'pi pi-user',
            shortcut: '⌘+O'
          }
        ]
      },
      {
        label: 'Users',
        items: [
          {
            label: 'Add User',
            icon: 'pi pi-user',
            shortcut: '⌘+O'
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q'
          }
        ]
      },
      {
        separator: true
      }
    ];
  }
  
}
