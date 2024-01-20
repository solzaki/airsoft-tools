import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./feature/common/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent]
})
export class AppComponent {
  title = 'airsoft-tools';
}
