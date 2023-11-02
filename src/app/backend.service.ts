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
}
