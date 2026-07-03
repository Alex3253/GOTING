import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class Hero {
  protected readonly stats = [
    { value: '15+', label: 'Años de experiencia' },
    { value: '8k+', label: 'Clientes satisfechos' },
    { value: '20+', label: 'Profesionales' },
    { value: '100%', label: 'Compromiso' },
  ];

  protected readonly clients = [
    'Provías Nacional',
    'ANA',
    'Meta Engineering',
    'Intersur',
    'Norvial',
    'MTC',
  ];
}
