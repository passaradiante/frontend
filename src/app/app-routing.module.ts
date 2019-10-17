import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { TelaInicialComponent } from './pages/telaInicial/tela-inicial.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import {DetalheComponent} from './components/detalhe/detalhe.component';


const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login',    component: LoginComponent },
  { path: 'anuncio',    component: AnuncioComponent },
  {path: 'cadastro-produto',component :CadastroProdutoComponent},
  {path: 'produto/detalhe',component:DetalheComponent},
  { path: '',    component: TelaInicialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
