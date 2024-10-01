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

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [PanelMenuModule, BadgeModule, RippleModule, DockModule, RadioButtonModule, CommonModule, FormsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  
    constructor(public utils: LoadingService) {

    }

  ngOnInit() {
    
  }

}
