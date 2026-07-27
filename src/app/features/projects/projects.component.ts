import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { projects } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = projects;
}
