import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo, experience, education, stats } from '../../data/portfolio-data';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  personalInfo = personalInfo;
  experience = experience;
  education = education;
  stats = stats;
}
