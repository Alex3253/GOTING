import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Appointment } from '../../home/sections/appointment/appointment.component';

@Component({
  selector: 'app-contact-page',
  imports: [RouterLink, Appointment],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPage {}
