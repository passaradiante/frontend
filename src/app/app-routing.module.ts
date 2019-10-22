import { BarraOcultaComponent } from './pages/barra-oculta/barra-oculta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { TelaInicialComponent } from './pages/telaInicial/tela-inicial.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';



const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login',    component: LoginComponent },
  { path: 'anuncio',    component: AnuncioComponent },
  {path: 'cadastro-produto',component :CadastroProdutoComponent},
  { path: '',    component: TelaInicialComponent },
  {path:'barra-oculta', component: BarraOcultaComponent ,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
