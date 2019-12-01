import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseService {

  urlAPI: string = `${environment.Endpoint}${this.endpoint}`;

  constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) { }

  // Método GET - Para obter dados da API com ou sem caminho na URL
  obter(caminho = '') {
    return this.http.get(this.urlAPI + `/${caminho}`);
  }
  
  // Método POST - Para adicionar dados na API com ou sem caminho na URL
  // E sempre recebendo um retorno da API
  adicionar(body = {}, caminho = '') {
    return this.http.post(this.urlAPI + `/${caminho}`, body);
  }

  // Método PUT - Para atualizar dados da API com ou sem caminho na URL
  // E sempre recebendo um retorno da API
  atualizar(body = {}, caminho = '') {
    return this.http.put(this.urlAPI + `/${caminho}`, body);
  }

  // Método DELETE - Para remover um dados a partir do ID
  remover(id: number) {
    return this.http.delete(this.urlAPI + id)
  }


}
