import { Component, OnInit } from '@angular/core';
import { UsuarioCadastro } from '../../model/usuariocadastro.model';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarioCadastro: UsuarioCadastro = new UsuarioCadastro();
  usuarios:any = [];
  constructor(
    private service: CadastroUsuarioService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.service.listaUsuarios()
    .then((result) => {
      this.usuarios = result;
      console.log(this.usuarios);
    }).catch((err) => {
    console.log(err);
  });
  }

  onSubmit() {

    if(!this.service.emailExiste(this.usuarioCadastro.email, this.usuarios)){

    this.service.cadastrar(this.usuarioCadastro)
      .then((result) => {

        console.log(result);
        if(result == 200)
        alert('Cadastro efetuado com sucesso!')
        this.router.navigateByUrl('/login');

      }).catch((err) => {
        alert(err);
    });

    this.usuarioCadastro = new UsuarioCadastro();

    } else {

      alert("E-mail já cadastrado!")
    }
  }

}
