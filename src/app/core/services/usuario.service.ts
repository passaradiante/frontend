import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UsuarioService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'usuario');
  }

  obterDadosDoUsuario() {
    var takenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') })
    return this.http.get(this.urlAPI, { headers: takenHeader });
  }

  adicionarUsuario(usuario) {
    return this.adicionar(usuario, '/cadastro');
  }

  atualizarUsuario(usuario){
    return this.atualizar(usuario);
  }

  logarUsuario(credenciais) {
    return this.adicionar(credenciais, '/login')
  }

  


}
