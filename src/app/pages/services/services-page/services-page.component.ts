import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Services } from '../../home/sections/services/services.component';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink, Services],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPage {}
