import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

import {
  personalInfo,
  socialLinks,
  skills,
  services,
  projects,
  stats,
  testimonials,
  blogPosts,
  experience,
  education,
  certificates,
} from '../../data/portfolio-data';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SectionHeadingComponent,
    ProjectCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
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

  @ViewChild('badge') badge!: ElementRef;
  @ViewChild('heading') heading!: ElementRef;
  @ViewChild('tagline') tagline!: ElementRef;
  @ViewChild('buttons') buttons!: ElementRef;
  @ViewChild('social') social!: ElementRef;
  @ViewChild('profile') profile!: ElementRef;

  ngAfterViewInit(): void {
    const tl = gsap.timeline();

    tl.from(this.badge.nativeElement, {
      opacity: 0,
      y: -30,
      duration: 0.6,
    })
      .from(this.heading.nativeElement, {
        opacity: 0,
        y: 80,
        duration: 1,
      })
      .from(this.tagline.nativeElement, {
        opacity: 0,
        y: 40,
        duration: 0.8,
      })
      .from(this.buttons.nativeElement, {
        opacity: 0,
        y: 30,
        duration: 0.6,
      })
      .from(this.social.nativeElement, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
      .from(this.profile.nativeElement, {
        opacity: 0,
        scale: 0.85,
        duration: 1,
      });
  }
}
