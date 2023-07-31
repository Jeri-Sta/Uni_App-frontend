import { Component, EventEmitter, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent {
  public user: User = new User();
  public isLoading: boolean = false;
  public showMenuEmitter = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) { }
  
  onLogin() {
    this.isLoading = true;
    this.authService.login(this.user.email, this.user.password)
      .subscribe(
        (response: any) => {
          // Lógica para tratamento da resposta do servidor após o login
          console.log('Login bem-sucedido:', response);
          this.isLoading = false;
          this.showMenuEmitter.emit(true);
          this.router.navigate(['/'])
        },
        (error: any) => {
          // Lógica para tratamento de erro durante o login
          console.error('Erro durante o login:', error);
          this.showMenuEmitter.emit(false);
          this.isLoading = false;
        }
      );
  }

  

}
