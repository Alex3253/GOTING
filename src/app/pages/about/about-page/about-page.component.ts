import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { About } from '../../home/sections/about/about.component';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink, About],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
})
export class AboutPage {}
