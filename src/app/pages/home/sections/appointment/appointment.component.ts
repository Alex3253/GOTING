import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class Appointment {
  protected readonly contactos = [
    {
      nombre: 'Ing. Brayam Gómez Zapana',
      cip: 'CIP 304352',
      cargo: 'Gerente General',
      telefono: '942 678 678',
      email: 'consultas.goting@gmail.com',
      foto: null,
    },
    {
      nombre: 'Ing. Noelia Fernández Gavilán',
      cip: null,
      cargo: 'Analista Comercial',
      telefono: '942 678 678',
      email: 'consultas.goting@gmail.com',
      foto: null,
    },
  ];

  protected readonly galeriaPlaceholders = [null, null, null];
}
