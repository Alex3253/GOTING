import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class Stats {
  protected readonly stats = [
    { value: '15+', label: 'Años de experiencia' },
    { value: '8,000+', label: 'Clientes Satisfechos' },
    { value: '12', label: 'Especialistas' },
    { value: '25+', label: 'Clientes que confian' },
  ];
}
