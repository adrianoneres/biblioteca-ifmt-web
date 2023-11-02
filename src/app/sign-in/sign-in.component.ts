import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  nomeUsuario = '';
  senha = '';

  constructor(private backendService: BackendService) {

  }

  enviarLogin() {
    this.backendService
      .login(this.nomeUsuario, this.senha)
      .then(resposta => {
        if (resposta.status == 200) {
          localStorage.setItem('token', resposta.data.accessToken);
        }
      });
  }
}
