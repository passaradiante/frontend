import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarraMenuComponent } from './core/components/barra-menu/barra-menu.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/Usuario/login/login.component';
import { CadastroComponent } from './pages/Usuario/cadastro/cadastro.component';
import { DetalheProdutoComponent } from './core/components/detalhes/detalhe-produto/detalhe-prod.component';
import { UsuarioService } from './core/services/usuario.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProdCadComponent } from './pages/produto/cadastro/prod-cad.component';
import { ProdListComponent } from './pages/produto/listagem/prod-list.component';
import { MinhaContaComponent } from './pages/usuario/minha-conta/minha-conta.component';
import { ProdutoService } from './core/services/produto.service';
import { CategoriaService } from './core/services/categoria.service';
import { NotificacaoComponent } from './core/components/notificacao/notificacao.component';
import { ProdutoInteresseService } from './core/services/produtointeresse.service';
import { DetalheSolicitacaoComponent } from './core/components/detalhes/detalhes-solicitacao/detalhe-solicitacao.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,

    HomeComponent,
    CadastroComponent,
    LoginComponent,
    DetalheProdutoComponent,
    DetalheSolicitacaoComponent,
    ProdCadComponent,
    ProdListComponent,
    MinhaContaComponent,
    NotificacaoComponent
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    UsuarioService,
    ProdutoService,
    CategoriaService,
    ProdutoInteresseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }