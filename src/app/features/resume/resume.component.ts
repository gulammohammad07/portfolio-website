import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../core/services/resume.service'; // Update the path if needed
import {
  personalInfo,
  experience,
  education,
  skills
} from '../../data/portfolio-data';

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

  private resumeService = inject(ResumeService);

  downloadResume() {
    this.resumeService.downloadResume();
  }
}