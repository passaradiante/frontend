import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: any = [];
  constructor(
    private service: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.listarUsuarios()
      .then((result) => {
        this.usuarios = result;
        console.log(this.usuarios);
      }).catch((err) => {
        console.log(err);
      });
  }

  cadastrarUsuario() {
    this.service.cadastrar(this.usuario)
      .then((result) => {
        const operacao = result.data;
        console.log(operacao);
        //this.router.navigateByUrl('/login');
      }).catch((result) => {
        console.log(result);
      });
    this.usuario = new Usuario();
  }


}