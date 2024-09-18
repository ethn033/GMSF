import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockModule } from 'primeng/dock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DockModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
    }
];
  title = 'GMSF';
}
