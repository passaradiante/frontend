import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SolicitacaoProdutoService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'solicitacaoproduto');
  }

  confirmarSolicitacaoProduto(request: any) {
    return this.http.post(this.urlAPI, request);
  }

  marcarComoLida(id) {
    return this.adicionar('', `/marcarComoLida${id}`);
  }

  obterSolicitacoesPorUsuario(idDoUsuario) {
    return this.obter(`/obterSolicitacoes${idDoUsuario}`);
  }

  obterSolicitacoesPorId(idSolicitacao) {
    return this.obter(`/obterSolicitacaoPorId${idSolicitacao}`);
  }

}
