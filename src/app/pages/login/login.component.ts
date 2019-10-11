import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: any = [];

  constructor(
    private service: UsuarioService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.service.listarUsuarios()
      .then((result) => {
        this.usuarios = result;
        console.log(this.usuarios);
      }).catch((err) => {
        console.log(err);
      });
  }

  logar() {
    const conta = this.usuario;
    this.service.logar(conta.email, conta.senha, this.usuarios)
      .then((result) => {
        if (result) {
          return alert("Usuario logado!")
        }
        alert("Dados inválidos!")
      })

  }
}
