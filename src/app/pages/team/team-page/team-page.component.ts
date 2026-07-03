import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Team } from '../../home/sections/team/team.component';
import { Testimonials } from '../../home/sections/testimonials/testimonials.component';

@Component({
  selector: 'app-team-page',
  imports: [RouterLink, Team, Testimonials],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css',
})
export class TeamPage {}
