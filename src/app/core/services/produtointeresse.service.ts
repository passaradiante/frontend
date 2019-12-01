import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProdutoInteresseService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'produtointeresse');
  }

  obterInterresePorUsuario(idUsuario) {
    return this.http.get(this.urlAPI + `/${idUsuario}`);
  }

  obterInteressePorId(id) {
    return this.http.get(this.urlAPI + `/interesseporid/${id}`)
  }

  adicionarInteresse(pedidoInteresse) {
    return this.adicionar(pedidoInteresse, `/interesse`)
  }

  marcarComoLido(id) {
    let pedidoInteresseLido = { "idNotificacao": id };
    return this.adicionar(pedidoInteresseLido);
  }

  verificarSeUsuarioSolicitou(idProduto, idUsuario) {
    return this.http.get(this.urlAPI + `/usuarioSolicitou/${idProduto}/${idUsuario}`);
  }

}
