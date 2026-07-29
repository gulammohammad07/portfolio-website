import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  downloadResume() {
    window.open('/src/assets/Gulam_Resume.pdf', '_blank');
  }
}
