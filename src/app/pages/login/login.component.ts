import { Component, OnInit } from '@angular/core';
import { UsuarioCadastro } from '../../model/usuariocadastro.model';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usuarioCadastro: UsuarioCadastro = new UsuarioCadastro();
  usuarios:any = [];

  constructor(
    private service: CadastroUsuarioService
    ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void{
    this.service.listaUsuarios()
    .then((result) => {
      this.usuarios = result;
      console.log(this.usuarios);
    }).catch((err) => {
    console.log(err);
  });
}
  
  logar() {
    const conta = this.usuarioCadastro;
    if(this.service.logar(conta.email, conta.senha, this.usuarios))
      alert('Usuario logado!')
    else 
      alert('Dados inválidos!')
  }
}
