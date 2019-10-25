import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarraMenuComponent } from './core/components/barra-menu/barra-menu.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DetalheComponent } from './core/components/detalhe/detalhe.component';
import { UsuarioService } from './core/services/usuario.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProdCadComponent } from './pages/produto/cadastro/prod-cad.component';
import { ProdListComponent } from './pages/produto/listagem/prod-list.component';


@NgModule({
  declarations: [
    AppComponent,

    BarraMenuComponent,

    HomeComponent,
    CadastroComponent,
    LoginComponent,
    DetalheComponent,
    ProdCadComponent,
    ProdListComponent
  
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
