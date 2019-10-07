import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { TelaInicialComponent } from './pages/telaInicial/tela-inicial.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login',    component: LoginComponent },
  { path: 'anuncio',    component: AnuncioComponent },
  { path: '',    component: TelaInicialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
