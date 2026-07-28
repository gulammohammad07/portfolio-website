import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  downloadResume() {
    window.open(
      'http://localhost:5000/api/resume/download',
      '_blank'
    );
  }

}