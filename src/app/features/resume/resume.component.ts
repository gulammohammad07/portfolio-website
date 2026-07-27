import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo, experience, education, skills } from '../../data/portfolio-data';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  personalInfo = personalInfo;
  experience = experience;
  education = education;
  skills = skills;
}
