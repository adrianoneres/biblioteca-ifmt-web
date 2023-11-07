import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  nomeUsuario = '';
  senha = '';

  constructor(
    private backendService: BackendService,
    private toastr: ToastrService
  ) {

  }

  enviarLogin() {
    this.backendService
      .login(this.nomeUsuario, this.senha)
      .then(resposta => { // se a requisição obtiver sucesso
        if (resposta.status == 200) {
          localStorage.setItem('token', resposta.data.accessToken);
        }
      })
      // se tiver erro:
      .catch(erro => this.toastr.error("Usuário ou senha inválidos. Tente novamente", "Erro no login"));
  }
}
