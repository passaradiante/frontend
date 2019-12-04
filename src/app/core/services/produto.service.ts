import { Injectable } from '@angular/core';
import { BaseService } from './baseservice/baseservice.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProdutoService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'produto');
  }

  obterProdutos() {
    return this.obter('?$expand=Categoria');
  }

  obterProdutoPorId(id) {
    return this.obter('?$filter=id%20eq%20' + id + '&$expand=Categoria,Usuario');
  }

  adicionarProduto(produto) {
    return this.adicionar(produto, '/cadastro');
  }

  atualizarProduto(id, produto) { 
    return this.atualizar(produto, id);
  }

  removerProduto(id) {
    return this.remover(id);
  }

  verificarProdutoAnunciante(idUsuario, idProduto) {
    return this.http.get(this.urlAPI + `/produtoDoAnunciante/${idUsuario}/${idProduto}`);
  }


}
