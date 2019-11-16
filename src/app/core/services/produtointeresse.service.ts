import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ProdutoInteresseService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'produtointeresse');
  }

  getInteresseById(idUsuario) {
    return this.http.get(this.urlAPI + `/${idUsuario}`);
  }

  comoLido(id) {
    const request = {
      "idNotificacao": id
    }
    return this.http.post(this.urlAPI, request);
  }

  sendInteresse(request) {
    return this.http.post(this.urlAPI + `/interesse`, request)
  }

}
