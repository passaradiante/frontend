import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuario.service';
import { ProdutoInteresseService } from '../../../services/produtointeresse.service';


@Component({
  selector: 'app-detalhe-prod',
  templateUrl: './detalhe-prod.component.html',
  styleUrls: ['./detalhe-prod.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  interesse = false;
  produtoAtual$: any;
  idDoProduto: number;
  idSolicitante: string;
  quantidadeDesejada = 1;
  usuarioJaSolicitou = false;
  usuarioEstaLogado = false;
  produtoDoAnunciante = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
    private interesseService: ProdutoInteresseService,
    private usuarioService: UsuarioService) {

    // Receber o ID do produto através da página [Produtos] 
    this.route.queryParams.subscribe(params => {
      if (params && params.produto) {
        this.idDoProduto = params.produto;
      }
    })
  }

  ngOnInit() {
    this.obterIdDoUsuario();
  
    this.produtoService.obterProdutoPorId(this.idDoProduto).subscribe(
      (resp: any) => {
        this.produtoAtual$ = resp[0];
        this.usuarioJaSolicitouProduto(this.produtoAtual$.Id, this.idSolicitante);
        this.verificarProdutoEhDoUsuario(this.idSolicitante, this.produtoAtual$.Id);
      },
      (err: any) => {
        Swal.fire('Ops', 'Produto não encontrado!', 'error');
        this.router.navigateByUrl('/');
      }
    );

  }

  // Método para mostrar a tela de confirmação de interesse
  // Obs: Mostra apenas se o usuário estiver logado
  mostrarTelaDeIntresse() {
    if (!this.usuarioEstaLogado)
      this.swalUsuarioNaoEstaLogado();
    else
      this.interesse = true;

  }

  // Mostra um sweetalert se o usuário não estiver logado
  swalUsuarioNaoEstaLogado() {
    Swal.fire(
      'Epa!',
      'Primeiro crie/entre na sua conta!',
      'warning'
    )
    this.router.navigateByUrl('/login');
  }

  // Método para confirmar o interesse no produto e mandar a requisição para a API
  confirmarInteresse() {
    
    // Valida se a quantidade desejada está correta
    if (this.quantidadeDesejada < 1) {
      this.swalValidacaoDeRequisicaoDeInteresse(false)
      return
    }

    // Prepara a pedido de interesse
    const pedidoInteresse = {
      "ProdutoID": this.produtoAtual$.Id,
      "UsuarioSolicitanteID": this.idSolicitante,
      "Quantidade": this.quantidadeDesejada
    }

    this.interesseService.adicionarInteresse(pedidoInteresse).subscribe(
      res => {
        this.swalValidacaoDeRequisicaoDeInteresse(res);
      },
      err => { console.log(err) }
    );
  }

  cancelarInteresse() {
    this.interesse = false;
  }

  // Mostra um sweelAlert que valida se o requisicao do interesse deu certo
  // ou se a quantidade solicitada está de acordo.
  swalValidacaoDeRequisicaoDeInteresse(response) {

    if (response.Validado) {
      Swal.fire(
        'Massa!',
        'Enviado sua solicitação para o anunciante, aguarde seu retorno!',
        'success'
      )
      // Após solicita
      this.router.navigateByUrl('/produtos');
    } else {
      Swal.fire(
        'Ops...',
        `Ei, ${!response ? 'coloque uma quantidade válida!' : 'Ocorreu um problema, favos nos contactar no campo: Feedback!'}`,
        'error'
      )
    }
  }

  // Método para obter o Id do usuario logado
  obterIdDoUsuario() {
    this.usuarioService.obterDadosDoUsuario().subscribe(
      (res: any) => {
        this.idSolicitante = res.Id;
        if (res.Id != undefined || res.Id != null)
          this.usuarioEstaLogado = true;
      },
    )
  }

  // Método para verificar se o usuário já havia solicitado o produto
  usuarioJaSolicitouProduto(idProduto, idUsuario) {
    this.interesseService.verificarSeUsuarioSolicitou(idProduto, idUsuario).subscribe(
      (res: any) => {
        if (res.Validado)
          this.usuarioJaSolicitou = true;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  // Método para verificar se o produto é do usuário logado
  verificarProdutoEhDoUsuario(idProduto, idUsuario) {
    this.produtoService.verificarProdutoAnunciante(idUsuario, idProduto).subscribe(
      (res: any) => {
        if(res.Validado)
        this.produtoDoAnunciante = true;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }


}
