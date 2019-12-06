import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ProdutoInteresseService } from '../../services/produtointeresse.service';
import { Router, NavigationExtras } from '@angular/router';
import { SolicitacaoProdutoService } from '../../services/solicitacaoproduto.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  interesseNotificacoes$: any;
  solicitacoesNotificacoes$: any;
  pedidosNotificacoes$: any;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private interesseService: ProdutoInteresseService,
    private solicitacaoService: SolicitacaoProdutoService) { }

  ngOnInit() {
    this.obterUsuarioInteressesSolicitacoes();
  }

  // Método para obter o usuário
  // E as notificações: Interesse de produto, Solicitaçoes e pedidos
  obterUsuarioInteressesSolicitacoes() {
    this.usuarioService.obterDadosDoUsuario().subscribe(
      (res: any) => {
        let idDoUsuario = res.Id;
        this.obterInteressesDeProdutoPorUsuario(idDoUsuario);
        this.obterSolicitacoesDeProdutoPorUsuario(idDoUsuario);
      },
    )
  }

  //#region [InteressesProduto]

  // Método para adquirir interesses de produto por usuário 
  obterInteressesDeProdutoPorUsuario(id) {
    this.interesseService.obterInterresePorUsuario(id).subscribe(
      (res: any) => {
        if(res.length > 0)
        this.interesseNotificacoes$ = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  // Método para ver o interesse do produto
  visualizarInteresseDeProduto(id) {
    // Eniva o Id do Interesse para outra página
    let params: NavigationExtras = {
      queryParams: {
        solicitando: id
      }
    }
    this.marcarInteresseDeProdutoComoLido(id);
    this.router.navigate(['solicitacao-produto'], params);
  }

  // Método para marcar o interesse como lido
  marcarInteresseDeProdutoComoLido(id) {
    this.interesseService.marcarComoLido(id).subscribe(
      (res: any) => {
        if (res.Validado)
          this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    )
  }

  //#endregion 

  //#region [Solicitacoes]

  obterSolicitacoesDeProdutoPorUsuario(idDoUsuario) {
    this.solicitacaoService.obterSolicitacoesPorUsuario(idDoUsuario).subscribe(
      (res: any) => {
        if(res.length > 0)
        this.solicitacoesNotificacoes$ = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  // Método para ver a solicitação
  visualizarSolicitacaoDeProduto(id) {
    let params: NavigationExtras = {
      queryParams: {
        solicitacao: id
      }
    }
    this.marcarSolicitacaoComoLida(id);
    this.router.navigate(['solicitacoes'], params)
  }
  
  // Método para marcar a solicitação como lida
  marcarSolicitacaoComoLida(id) {
    this.solicitacaoService.marcarComoLida(id).subscribe(
      (res: any) => {
        if (res.Validado)
          this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    )
  }

  //#endregion

  }
