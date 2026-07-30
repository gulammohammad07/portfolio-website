import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { personalInfo, socialLinks } from '../../data/portfolio-data';
import { ContactService } from '../../core/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private contactService = inject(ContactService);

  isSubmitting = false;

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
    this.isSubmitting = true;

    this.contactService.sendMessage(this.form).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;

        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for contacting me. I will get back to you soon.',
          confirmButtonText: 'Awesome!',
        });

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
        this.isSubmitting = false;

        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          confirmButtonText: 'OK',
        });

        console.error(err);
      },
    });
  }
}