import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { DockModule } from 'primeng/dock';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [PanelMenuModule, BadgeModule, RippleModule, DockModule, RadioButtonModule, CommonModule, FormsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Mail',
              icon: 'pi pi-envelope',
              badge: '5',
              items: [
                  {
                      label: 'Compose',
                      icon: 'pi pi-file-edit',
                      shortcut: '⌘+N'
                  },
                  {
                      label: 'Inbox',
                      icon: 'pi pi-inbox',
                      badge: '5'
                  },
                  {
                      label: 'Sent',
                      icon: 'pi pi-send',
                      shortcut: '⌘+S'
                  },
                  {
                      label: 'Trash',
                      icon: 'pi pi-trash',
                      shortcut: '⌘+T'
                  }
              ]
          },
          {
              label: 'Reports',
              icon: 'pi pi-chart-bar',
              shortcut: '⌘+R',
              items: [
                  {
                      label: 'Sales',
                      icon: 'pi pi-chart-line',
                      badge: '3'
                  },
                  {
                      label: 'Products',
                      icon: 'pi pi-list',
                      badge: '6'
                  }
              ]
          },
          {
              label: 'Profile',
              icon: 'pi pi-user',
              shortcut: '⌘+W',
              items: [
                  {
                      label: 'Settings',
                      icon: 'pi pi-cog',
                      shortcut: '⌘+O'
                  },
                  {
                      label: 'Privacy',
                      icon: 'pi pi-shield',
                      shortcut: '⌘+P'
                  }
              ]
          }
      ];
  }

  toggleAll() {
      const expanded = !this.areAllItemsExpanded();
      this.items = this.toggleAllRecursive(this.items, expanded);
  }

  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
      return items.map((menuItem) => {
          menuItem.expanded = expanded;
          if (menuItem.items) {
              menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
          }
          return menuItem;
      });
  }

  private areAllItemsExpanded(): boolean {
      return this.items.every((menuItem) => menuItem.expanded);
  }
}
