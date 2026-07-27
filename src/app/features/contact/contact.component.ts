import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { personalInfo, socialLinks } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  personalInfo = personalInfo;
  socialLinks = socialLinks;
  form = { name: '', email: '', subject: '', message: '' };

  submit() {
    alert('Thanks! Your message has been captured.');
  }
}
