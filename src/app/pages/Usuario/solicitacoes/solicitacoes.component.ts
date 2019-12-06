import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitacaoProdutoService } from 'src/app/core/services/solicitacaoproduto.service';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {

  solicitacaoProduto$: any;
  idSolicitacao: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceSolicitacao: SolicitacaoProdutoService
  ) {
    // Recebe o Id do interesse
    this.route.queryParams.subscribe(params => {
      if (params && params.solicitacao) {
        this.idSolicitacao = params.solicitacao;
      }
    })
  }

  ngOnInit() {
    this.obterDadosSolicitacaoPorId(this.idSolicitacao);
  }

  // Método para adquirir dados do interesse do produto pelo o Id
  obterDadosSolicitacaoPorId(id) {

    this.serviceSolicitacao.obterSolicitacoesPorId(id).subscribe(
      (res: any) => { console.log(res), this.solicitacaoProduto$ = res },
      (err: any) => { console.log(err)}
      );
    
  }

}
