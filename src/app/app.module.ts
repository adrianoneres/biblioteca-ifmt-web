import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ButtonComponent } from './button/button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { LivroListarComponent } from './livro-listar/livro-listar.component';
import { LivroCadastrarComponent } from './livro-cadastrar/livro-cadastrar.component';
import { TemplateAutenticadoComponent } from './template-autenticado/template-autenticado.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'livros', component: LivroListarComponent },
  { path: 'livros/cadastrar', component: LivroCadastrarComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LivroListarComponent,
    LivroCadastrarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ToastNoAnimationModule.forRoot(),
    BrowserModule,
    TitleComponent,
    ButtonComponent,
    FormsModule,
    InputTextComponent,
    TemplateAutenticadoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
