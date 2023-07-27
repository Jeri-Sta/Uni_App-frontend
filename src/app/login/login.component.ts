import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) { }
  
  onLogin() {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response: any) => {
          // Lógica para tratamento da resposta do servidor após o login
          console.log('Login bem-sucedido:', response);
        },
        (error: any) => {
          // Lógica para tratamento de erro durante o login
          console.error('Erro durante o login:', error);
        }
      );
  }

  

}
