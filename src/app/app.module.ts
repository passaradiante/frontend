import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { TelaInicialComponent } from './pages/telaInicial/tela-inicial.component';
import { ProdutoComponent } from './pages/anuncio/produto/produto.component';
import { ServicoComponent } from './pages/anuncio/servico/servico.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { DetalheComponent } from './components/detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    BarraMenuComponent,
    TelaInicialComponent,
    ProdutoComponent,
    ServicoComponent,
    AnuncioComponent,
    CadastroProdutoComponent,
    DetalheComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
