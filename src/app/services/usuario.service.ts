import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  usuarios: any;

  API = environment.Endpoint;

  private userAPI = this.API + 'usuario';


  constructor(
  ) { }

  async listarUsuarios() {
    return axios
      .get(this.userAPI)
      .then((retorno) => {
        return retorno.data;
      });
  };

  async usuarioID(id) {
    return axios
      .get(this.userAPI, id)
      .then((data) => data);
  }

  async cadastrar(usuario: Usuario) {
    return axios
      .post(this.userAPI, usuario)
      .then((retorno) => {
        return retorno;
      });
  }

  async logar(emailUser, senhaUser, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].email == emailUser && array[i].senha == senhaUser) {
        return true;
      }
      return false;
    }
  }

}
