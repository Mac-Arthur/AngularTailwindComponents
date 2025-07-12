import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learnTailwind';
  menuOpen = false;
  menuOpenV2 = false;
  sidebarOpen = false;
  sidebarOpenV2 = false;
}
