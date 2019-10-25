import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsuarioService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'usuario');
  }


  obterTodos(){
    return this.getAll();
  }

  save(usuario){
    return this.add(usuario);
  }

  logar(credenciais){
    return this.login(credenciais);
  }

}
