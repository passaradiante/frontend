import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoInteresseService } from 'src/app/core/services/produtointeresse.service';
import { SolicitacaoProdutoService } from 'src/app/core/services/solicitacaoproduto.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitacao-produto',
  templateUrl: './solicitacao-produto.component.html',
  styleUrls: ['./solicitacao-produto.component.css']
})
export class SolicitacaoProdutoComponent implements OnInit {

  idDoInteresse: number;
  formulario: FormGroup;
  solicitacao$: any;
  solicitacaoEncaminhada = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProdutoInteresseService,
    private serviceSolicitacao: SolicitacaoProdutoService
  ) {
    // Recebe o Id do interesse
    this.route.queryParams.subscribe(params => {
      if (params && params.solicitando) {
        this.idDoInteresse = params.solicitando;
      }
    })
  }

  ngOnInit() {
    this.obterDadosInteressePorId(this.idDoInteresse)
  }

  // Método para adquirir dados do interesse do produto pelo o Id
  obterDadosInteressePorId(id) {
    this.service.obterInteressePorId(id).subscribe(
      res => {
        this.solicitacao$ = res;
      },
      err => {
        console.log(err)
      }
    )
  }

  // Método para enviar solicitacao do produto
  enviarSolicitacao(id) {
    
    let pedidoSolicitacao = {
      ProdutoInteresseId: id,
      StatusId: 1 //Status inical - Pedido aceito
    };

    this.serviceSolicitacao.confirmarSolicitacaoProduto(pedidoSolicitacao).subscribe(
      (res: any) => {
        this.swalValidacaoSolicitacaoProduto(res);
      },
      (err: any) => {
        console.log(err)
      }
    );
  }

  // SweelAlert para validacao de solicitacao
  // Mostra se obteve sucesso ou falha
  swalValidacaoSolicitacaoProduto(response) {
    if (response.Validado) {
      Swal.fire(
        'Show!',
        'Solicitação iniciada, acompanhe em: Minhas Solicitações!',
        'success'
      )
      this.router.navigateByUrl('/notificacoes');
    } else {
      Swal.fire(
        'Ops...',
        `Ei, ${!response ? 'coloque uma quantidade válida!': 'Ocorreu um problema, favos nos contactar no campo: Feedback!' }`,
        'error'
      )
    }
  }

}
