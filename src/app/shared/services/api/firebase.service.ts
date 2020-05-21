import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  sendEmailToMe() {
    const firebaseEmail = environment.firebaseFuc + '/email';
    return this.http.get<any>(firebaseEmail, {
      observe: 'response',
    });
  }
}
