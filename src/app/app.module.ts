import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { TelaInicialComponent } from './pages/telaInicial/tela-inicial.component';
import { ProdutoComponent } from './pages/anuncio/produto/produto.component';
import { ServicoComponent } from './pages/anuncio/servico/servico.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { BarraOcultaComponent } from './pages/barra-oculta/barra-oculta.component';
=======

import { BarraMenuComponent } from './core/components/barra-menu/barra-menu.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/Usuario/login/login.component';
import { CadastroComponent } from './pages/Usuario/cadastro/cadastro.component';
import { DetalheComponent } from './core/components/detalhe/detalhe.component';
import { UsuarioService } from './core/services/usuario.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProdCadComponent } from './pages/produto/cadastro/prod-cad.component';
import { ProdListComponent } from './pages/produto/listagem/prod-list.component';
import { MinhaContaComponent } from './pages/usuario/minha-conta/minha-conta.component';
import { ProdutoService } from './core/services/produto.service';
import { CategoriaService } from './core/services/categoria.service';

>>>>>>> 1ea7415477e74e704ad55b78d4b0e74193a9eb40

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,

    HomeComponent,
    CadastroComponent,
    LoginComponent,
<<<<<<< HEAD
    BarraMenuComponent,
    TelaInicialComponent,
    ProdutoComponent,
    ServicoComponent,
    AnuncioComponent,
    CadastroProdutoComponent,
    BarraOcultaComponent,
=======
    DetalheComponent,
    ProdCadComponent,
    ProdListComponent,
    MinhaContaComponent
  
>>>>>>> 1ea7415477e74e704ad55b78d4b0e74193a9eb40
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
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
