import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from '../../data/portfolio-data';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = services;
}
