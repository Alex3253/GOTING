import { Component } from '@angular/core';
import { Hero } from '../sections/main/main.component';
import { CtaBanner } from '../sections/cta-banner/cta-banner.component';

@Component({
  selector: 'app-home',
  imports: [Hero, CtaBanner],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class Home {}
