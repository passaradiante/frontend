import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/Usuario/cadastro/cadastro.component';
import { LoginComponent } from './pages/Usuario/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalheComponent } from './core/components/detalhe/detalhe.component';
import { ProdCadComponent } from './pages/produto/cadastro/prod-cad.component';
import { ProdListComponent } from './pages/produto/listagem/prod-list.component';
import { AuthGuard } from './core/auth/auth.guard';
import { MinhaContaComponent } from './pages/usuario/minha-conta/minha-conta.component';


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
    path: 'produto-servico/detalhe', component: DetalheComponent
  },
  {
    path:'produtos', component: ProdListComponent
  },
  // {
  //  path: 'servicos', component: ServListComponent
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
