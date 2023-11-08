import { Component } from '@angular/core';
import { Livro } from '../livro';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-cadastrar',
  templateUrl: './livro-cadastrar.component.html',
  styleUrls: ['./livro-cadastrar.component.scss']
})
export class LivroCadastrarComponent {
  livro: Livro;

  constructor(private backendService: BackendService, private router: Router) {
    this.livro = { titulo: '', autor: '' };
  }

  salvar() {
    // 1. Chamar o serviço para salvar o livro
    // 2. Ao salvar o livro, redirecionar para a tela de listagem
    this.backendService
      .criarLivro(this.livro)
      .then(resposta => this.router.navigate(['/livros']));
  }
}
