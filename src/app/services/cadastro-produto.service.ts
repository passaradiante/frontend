import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class CadastroProdutoService implements OnInit{
  produtos: any;
  private baseUrl = 'http://localhost:8080/api/produtoCadastro';

  ngOnInit(){
    this.produtos = this.listaProdutos();
  }

  constructor(
    ) { }

    async getProdutoId(id){
      return axios.get(this.baseUrl, id)
      .then((data) => data);
    }

    async listaProdutos() {
      return axios.get(this.baseUrl)
      .then((retorno) => {
            return retorno.data;
         }).catch(err => {
           console.log(err);
         })
    };

    //Verificar se a descricao já foi cadastrada
    cadastrar(produto) {
      return axios.post(this.baseUrl + '/adicionar', produto)
      .then((retorno) => {
         return retorno.status;
        }).catch((err) => {
      });
    }

    descricaoExiste(descricao,array){
      for(let i = 0; i<array.length; i++){
        if(array[i].descricao == descricao){
          return true;
        }
      }
      return false;
    }

}