import { Component, input } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class Team {
  showHeading = input(true);
  protected readonly team = [
    {
      name: 'Ing. Brayam Gómez Zapana',
      role: 'Gerente General',
      cip: 'CIP 304352',
      telefono: '942 678 678',
      email: 'consultas.goting@gmail.com',
      foto: 'equipo/Brayam.png',
    },
    {
      name: 'Ing. Noelia Fernández Gavilán',
      role: 'Analista Comercial',
      cip: null,
      telefono: '930 945 908',
      email: 'consultas.goting@gmail.com',
      foto: 'equipo/Noelia.png',
    },
    {
      name: 'Ing. Jesús Ramos',
      role: 'Líder de Procesamiento',
      cip: null,
      telefono: null,
      email: null,
      foto: 'equipo/Jesus.png',
    },
    {
      name: 'Ing. Yermay Berrocal',
      role: 'Especialista en Geomática y Topografía',
      cip: null,
      telefono: null,
      email: null,
      foto: 'equipo/YERMAY.png',
    },
    {
      name: 'Ing. Jorge Astuhuaman',
      role: 'Coordinador de Proyectos',
      cip: null,
      telefono: null,
      email: null,
      foto: 'equipo/JORGE.png',
    },
  ];
}
