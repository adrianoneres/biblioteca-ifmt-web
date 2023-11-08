import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  api = axios.create({
    baseURL: 'http://localhost:8080'
  });

  login(nomeUsuario: string, senha: string) {
    const body = { nomeUsuario, senha };
    return this.api.post('/seguranca/login', body);
  }

  listarLivros() {
    // 1. Recuperar o token do Local Storage:
    const token = localStorage.getItem('token');

    // 2. Criar o objeto de configuraçõs da requisição, com os cabeçalho Authorization:
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    };

    // 3. Enviar a requisição e retornar a resposta:
    return this.api.get('/livros', config);
  }
}
