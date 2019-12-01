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
      this.obterNomeUsuario();
  }

  // Método para realizar o Logout
  sairDaConta() {
    localStorage.removeItem('token');
    this.ngOnInit();
  }

  // Método para mostrar o nome do usuário na barra de menu
  obterNomeUsuario() {
    this.usuarioService.obterDadosDoUsuario().subscribe(
      (res: any) => {
        this.nomeUsuario = res.FullName;
        this.obterNotificacoesPorUsuario(res.Id);
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  // Método para informar as notificações
  obterNotificacoesPorUsuario(request: any) {
    this.interesseService.obterInterresePorUsuario(request).subscribe(
      res => {
        this.novasNotificacoes = _.pluck(res, 'Lido').filter(v => v == false).length;
      },
      err => {
        console.log(err);
      }
    )
  }

}
