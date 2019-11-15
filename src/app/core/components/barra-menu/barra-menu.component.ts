import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { _ } from 'underscore';
import { ProdutoInteresseService } from '../../services/produtointeresse.service';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {

  usuarioLogado: any;
  nomeUsuario: string;

  novasNotificacoes: number;

  constructor(
    private interesseService: ProdutoInteresseService,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioLogado = localStorage.getItem('token');
    if (this.usuarioLogado)
      this.getName();
  }

  logout() {
    localStorage.removeItem('token');
    this.ngOnInit();
  }

  getName() {
    this.usuarioService.dadosUsuario().subscribe(
      (res: any) => {
        this.nomeUsuario = res.FullName;
        this.countNotifications(res.Id);
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  countNotifications(request: any) {
    this.interesseService.getInteresseById(request).subscribe(
      res => {
        this.novasNotificacoes = _.pluck(res, 'Lido').filter(v => v == false).length;
      },
      err => {
        console.log(err);
      }
    )
  }

  swalNewNotification() {

  }

}
