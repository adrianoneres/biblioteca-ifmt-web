import { Component } from '@angular/core';

@Component({
  selector: 'app-livro-listar',
  templateUrl: './livro-listar.component.html',
  styleUrls: ['./livro-listar.component.scss']
})
export class LivroListarComponent {
  livros = [
    {
      titulo: "Hamlet",
      autor: "William Shakespeare"
    },
    {
      titulo: "Dracula",
      autor: "Bram Stoker"
    },
    {
      titulo: "Frankenstein",
      autor: "Mary Shelley"
    }
  ]
}
