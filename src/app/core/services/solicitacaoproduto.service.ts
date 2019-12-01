import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SolicitacaoProdutoService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'solicitacaoproduto');
  }

  confirmarSolicitacaoProduto(request: any) {
    return this.http.post(this.urlAPI, request)
  }

  marcarComoLida(id) {
    let solicitacaoLida = { "idSolicitacao": id };
    return this.adicionar(solicitacaoLida);
  }

  // obterSolicitacoesPedidos(request: any) {
  //   let body = {
  //     "Id": request,
  //     "Solicitante": true
  //   };
  //   return this.http.post(this.urlAPI + '/obterSolicitacoes', body);
  // }

}
