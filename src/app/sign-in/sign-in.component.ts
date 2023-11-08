import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
    private toastr: ToastrService,
    private router: Router
  ) {

  }

  ngOnInit() {
    const token = localStorage.getItem("token");

    if (token) {
      this.router.navigate(['/livros']);
    }
  }

  enviarLogin() {
    this.backendService
      .login(this.nomeUsuario, this.senha)
      .then(resposta => { // se a requisição obtiver sucesso
        if (resposta.status == 200) {
          localStorage.setItem('token', resposta.data.accessToken);
          // redirecionar para a página de listagem de livros:
          this.router.navigate(['/livros']);
        }
      })
      // se tiver erro:
      .catch(erro => this.toastr.error("Usuário ou senha inválidos. Tente novamente", "Erro no login"));
  }
}
