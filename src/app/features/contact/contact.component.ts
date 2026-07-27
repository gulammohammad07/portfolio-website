import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { personalInfo, socialLinks } from '../../data/portfolio-data';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private contactService = inject(ContactService);

  personalInfo = personalInfo;
  socialLinks = socialLinks;

  form = {
    full_name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  };

  submit() {
    console.log('Form Data:', this.form);

    this.contactService.sendMessage(this.form).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(res.message);

        this.form = {
          full_name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        };
      },

      error: (err) => {
        console.log('Error Response:', err.error);
        console.error(err);
      },
    });
  }
}
