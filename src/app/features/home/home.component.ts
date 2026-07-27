import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { personalInfo, socialLinks, skills, services, projects, stats, testimonials, blogPosts, experience, education, certificates } from '../../data/portfolio-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeadingComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  personalInfo = personalInfo;
  socialLinks = socialLinks;
  skills = skills;
  services = services;
  projects = projects;
  stats = stats;
  testimonials = testimonials;
  blogPosts = blogPosts;
  experience = experience;
  education = education;
  certificates = certificates;
}
