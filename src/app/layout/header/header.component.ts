import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class Header {
  protected readonly menuAbierto = signal(false);
  protected toggleMenu() { this.menuAbierto.update(v => !v); }
  protected cerrarMenu() { this.menuAbierto.set(false); }
}
