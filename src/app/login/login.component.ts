import { Component, EventEmitter, Injectable, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  public user: User = new User();
  public isLoading: boolean = false;
  public showMenuEmitter = new EventEmitter<boolean>();
  private token: string = ''

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.token = '';
    this.showMenuEmitter.emit(false);
  }
  
  onLogin() {
    this.isLoading = true;
    this.authService.login(this.user.email, this.user.password)
      .subscribe(
        (response: any) => {
          // Lógica para tratamento da resposta do servidor após o login
          console.log('Login bem-sucedido:', response);
          this.isLoading = false;
          localStorage.setItem(this.token, response.token);
          this.router.navigate(['/'])
        },
        (error: any) => {
          // Lógica para tratamento de erro durante o login
          console.error('Erro durante o login:', error);
          this.token = ''
          this.isLoading = false;
        }
      );
  }

  logout(): void {
    localStorage.removeItem(this.token);
    this.router.navigate(['/login'])
  }

  getToken(): string | null {
    return localStorage.getItem(this.token);
  }

  isLoggedIn(): boolean {
    if(!!this.getToken()) {
      this.showMenuEmitter.emit(true);
    } else {
      this.showMenuEmitter.emit(false);
    }
    return !!this.getToken(); // Converte para booleano: retorna true se o token existir e false se for nulo.
  }

  

}
