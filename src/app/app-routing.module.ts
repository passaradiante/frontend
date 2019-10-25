import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalheComponent } from './core/components/detalhe/detalhe.component';
import { ProdCadComponent } from './pages/produto/cadastro/prod-cad.component';
import { ProdListComponent } from './pages/produto/listagem/prod-list.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'produto/cadastro', component: ProdCadComponent
  },
  {
    path: 'servico/cadastro', component: ProdCadComponent
  },
  {
    path: 'produto/detalhe', component: DetalheComponent
  },
  {
    path:'produtos', component: ProdListComponent, canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
