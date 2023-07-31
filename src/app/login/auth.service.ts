import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private apiUrl = 'https://uniapp-jerielstarosky.b4a.run/api/auth/authenticate';
  private userAuthenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  public login(params: any) {
    const user = params.user;

    const body = { email: user.email, password: user.password };
    return this.http.post<any>(`${this.apiUrl}`, body).subscribe(
      (response: any) => {
        // Lógica para tratamento da resposta do servidor após o login
        console.log('Login bem-sucedido:', response);
        this.userAuthenticated = true;
        this.router.navigate(['/'])
        return {loading: false, token: response.token }
      },
      (error: any) => {
        // Lógica para tratamento de erro durante o login
        console.error('Erro durante o login:', error);
        this.userAuthenticated = false;
        return {loading: false}
      }
    );
  }

}
