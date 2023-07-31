import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: User = new User();
  public isLoading: boolean = false;

  constructor(private authService: AuthService) { }
  
  onLogin() {
    this.isLoading = true;
    var params = { loading: this.isLoading, token: '', user: this.user}

    const response = this.authService.login(params);

  }

  

}
