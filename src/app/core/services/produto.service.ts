import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProdutoService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'produto');
  }

  getProdutos() {
    return this.getAll('?$expand=Categoria');
  }

  save(produto) {
    return this.add(produto);
  }

  delete(id) {
    return this.remove(id);
  }

  getProdutoById(id) {
    return this.getAll('?$filter=id%20eq%20' + id + '&$expand=Categoria,Usuario')
  }

  sendInteresse(request) {
    return this.http.post(this.urlAPI + `/interesse`, request)
  }


}
