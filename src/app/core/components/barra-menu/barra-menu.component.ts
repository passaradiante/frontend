import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {

  usuarioLogado: any;
  nomeUsuario: string;

  constructor(
    private route: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioLogado = localStorage.getItem('token');
    if (this.usuarioLogado)
      this.getName();
    console.log(this.usuarioLogado)
  }

  logout() {
    localStorage.removeItem('token');
    this.ngOnInit();
  }


  getName() {
    this.usuarioService.dadosUsuario().subscribe(
      (res: any) => {
        this.nomeUsuario = res.FullName;
      },
      (err: any) => {
        console.log(err)
      }
    )
  }


}
