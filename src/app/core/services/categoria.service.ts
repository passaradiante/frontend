import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriaService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'categoria');
  }

  getCategorias() {
    return this.getAll();
  }

  save(produto) {
    return this.add(produto);
  }

  delete(id) {
    return this.remove(id);
  }

}
