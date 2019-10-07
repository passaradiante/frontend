import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class CadastroUsuarioService implements OnInit{
  usuarios: any;
  private baseUrl = 'http://localhost:8080/api/usuarioCadastro';

  ngOnInit(){
    this.usuarios = this.listaUsuarios();
  }

  constructor(
    ) { }

    async usuarioId(id){
      return axios.get(this.baseUrl, id)
      .then((data) => data);
    }

    async listaUsuarios() {
      return axios.get(this.baseUrl)
      .then((retorno) => {
            return retorno.data;
         }).catch(err => {
           console.log(err);
         })
    };

    async cadastrar(usuario) {
      return axios.post(this.baseUrl + '/adicionar', usuario)
      .then((retorno) => {
         return retorno.status;
        }).catch((err) => {
      });
    }

    async emailExiste(email,array){
      for(let i = 0; i<array.length; i++){
        if(array[i].email == email){
          return true;
        }
      }
      return false;
    }

    async logar(emailUser, senhaUser, array){
      for(let i = 0; i<array.length; i++){
        if(array[i].email == emailUser && array[i].senha == senhaUser) {
          return true;
        }
      }
      return false;
    }

}
