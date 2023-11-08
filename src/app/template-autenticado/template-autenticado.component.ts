import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-template-autenticado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './template-autenticado.component.html',
  styleUrls: ['./template-autenticado.component.scss']
})
export class TemplateAutenticadoComponent {

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    // Verificar se o usuário está logado:
    //  1. Recuperar o token do Local Storage
    const token = localStorage.getItem("token");

    //  2. Se não existir token, enviar o usuário para a página de login
    if (!token) {
      this.toastr.error("Token inválido", "Erro no login");
      this.router.navigate(['']);
    }
  }

  logout() {
    // 1. Remover o token do local storage
    localStorage.removeItem("token");
    // 2. Redirecionar para a página de login
    this.router.navigate(['']);
  }
}
