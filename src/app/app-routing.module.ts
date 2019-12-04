import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/Usuario/cadastro/cadastro.component';
import { LoginComponent } from './pages/Usuario/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalheProdutoComponent } from './core/components/detalhes/detalhe-produto/detalhe-prod.component';
import { ProdCadComponent } from './pages/produto/cadastro/prod-cad.component';
import { ProdListComponent } from './pages/produto/listagem/prod-list.component';
import { AuthGuard } from './core/auth/auth.guard';
import { MinhaContaComponent } from './pages/usuario/minha-conta/minha-conta.component';
import { NotificacaoComponent } from './core/components/notificacao/notificacao.component';
import { DetalheSolicitacaoComponent } from './core/components/detalhes/detalhes-solicitacao/detalhe-solicitacao.component';
import { SolicitacaoProdutoComponent } from './pages/produto/solicitacao/solicitacao-produto.component';
import { SolicitacoesComponent } from './pages/usuario/solicitacoes/solicitacoes.component';
import { MeusProdutosComponent } from './pages/usuario/meus-produtos/meus-produtos.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'minha-conta', component: MinhaContaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'produto/cadastro', component: ProdCadComponent,canActivate:[AuthGuard]
  },
  {
    path: 'servico/cadastro', component: ProdCadComponent
  },
  {
    path:'produtos', component: ProdListComponent
  },
  {
    path:'detalhes-produto', component: DetalheProdutoComponent
  },
  {
    path:'detalhes-solicitacao', component: DetalheSolicitacaoComponent
  },
  {
    path:'notificacoes', component: NotificacaoComponent
  },
  {
    path: 'solicitacao-produto', component: SolicitacaoProdutoComponent
  },
  {
    path: 'solicitacoes', component: SolicitacoesComponent
  },
  {
    path: 'meus-produtos', component: MeusProdutosComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
