import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  usuarioDados: any;
  constructor(
    private usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    this.usuarioService.dadosUsuario().subscribe(
      (res: any) =>{
        this.usuarioDados = res;
        console.log(this.usuarioDados)
      },
      (err: any) => {

      }
    )
  }


}
