import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuario.service';
import { ProdutoInteresseService } from '../../../services/produtointeresse.service';


@Component({
  selector: 'app-detalhe-solicitacao',
  templateUrl: './detalhe-solicitacao.component.html',
  styleUrls: ['./detalhe-solicitacao.component.css']
})
export class DetalheSolicitacaoComponent implements OnInit {

  interesse = false;
  solicitacaoId: any;
  produtoAtual$: any;
  idProduto: number;
  idSolicitante: string;
  qntDesejada = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
    private interesseService: ProdutoInteresseService,
    private usuarioService: UsuarioService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.produto) {
        this.solicitacaoId = params.solicitacao;
      }
    })
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  ngOnInit() {
    this.getId();
  }


  sendRequest() {

  }

  cancelRequest() {
   
  }
  //`Menu ${retorno.adicionar ? 'adicionado' : 'atualizado'}!`,
  SwalValidation(response) {
    if (response.Validado) {
      Swal.fire(
        'Massa!',
        'Enviado sua solicitação para o anunciante, aguarde seu retorno!',
        'success'
      )
      this.router.navigateByUrl('/produtos');
    } else {
      Swal.fire(
        'Ops...',
        `Ei, ${!response ? 'coloque uma quantidade válida!': 'Ocorreu um problema, vamos nos contactar no campo: Feedback!' }`,
        'error'
      )
    }
  }

  getId() {
    this.usuarioService.dadosUsuario().subscribe(
      (res: any) => {
        this.idSolicitante = res.Id;
      },
    )
  }


}
