import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UsuarioService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'usuario');
  }

  save(usuario) {
    return this.add(usuario);
  }

  logar(credenciais) {
    return this.login(credenciais);
  }

  dadosUsuario() {
    var takenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') })
    return this.http.get(this.urlAPI, { headers: takenHeader });
  }


}
