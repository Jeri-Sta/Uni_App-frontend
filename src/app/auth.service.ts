import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth/authenticate';

  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}`, body);
  }

}
