import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);

  private api = 'http://localhost:5000/api/contact';

  sendMessage(data: any) {
    return this.http.post(this.api, data);
  }
}