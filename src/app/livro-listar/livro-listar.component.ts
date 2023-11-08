import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-listar',
  templateUrl: './livro-listar.component.html',
  styleUrls: ['./livro-listar.component.scss']
})
export class LivroListarComponent {
  livros: Livro[] = []

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.listarLivros();
  }

  listarLivros() {
    // 1. Fazer a chamada listar livros utilizando o serviço:
    // 2. Ao obter sucesso, popular a lista de livros
    this.backendService
      .listarLivros()
      .then(resposta => this.livros = resposta.data);
  }
}
