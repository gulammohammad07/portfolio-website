import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  downloadResume() {
    window.open('/public/Gulam_Resume.pdf', '_blank');
  }
}
