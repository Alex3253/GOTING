import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header.component';
import { Footer } from './layout/footer/footer.component';
import { WhatsappButton } from './shared/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, WhatsappButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {}
