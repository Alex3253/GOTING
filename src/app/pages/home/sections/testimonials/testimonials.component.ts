import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class Testimonials {
  protected readonly testimonials = [
    { name: 'Ana Gómez', role: 'Paciente', quote: 'Excelente atención, el equipo me hizo sentir muy cómoda durante todo el tratamiento.' },
    { name: 'Luis Pérez', role: 'Paciente', quote: 'Los mejores resultados de ortodoncia que he visto, totalmente recomendado.' },
    { name: 'María Torres', role: 'Paciente', quote: 'Instalaciones modernas y un trato muy profesional. Volvería sin dudarlo.' },
  ];
}
