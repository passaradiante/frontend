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
import { SolicitacaoProdutoComponent } from './pages/produto/solicitacao/solicitacao-produto.component';
import { SolicitacaoProdutoService } from './core/services/solicitacaoproduto.service';
import { PedidosComponent } from './pages/usuario/pedidos/pedidos.component';
import { SolicitacoesComponent } from './pages/usuario/solicitacoes/solicitacoes.component';

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
    NotificacaoComponent,
    SolicitacaoProdutoComponent,
    PedidosComponent,
    SolicitacoesComponent
  
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
    ProdutoInteresseService,
    SolicitacaoProdutoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }