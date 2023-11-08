import { Component } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-cadastrar',
  templateUrl: './livro-cadastrar.component.html',
  styleUrls: ['./livro-cadastrar.component.scss']
})
export class LivroCadastrarComponent {
  livro: Livro;

  constructor() {
    this.livro = { titulo: '', autor: '' };
  }
}
