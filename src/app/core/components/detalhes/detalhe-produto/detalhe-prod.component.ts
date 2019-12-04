import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuario.service';
import { ProdutoInteresseService } from '../../../services/produtointeresse.service';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-detalhe-prod',
  templateUrl: './detalhe-prod.component.html',
  styleUrls: ['./detalhe-prod.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  categorias$: any;
  interesse = false;
  produtoAtual$: any;
  idDoProduto: number;
  idDoSolicitante: string;
  quantidadeDesejada = 1;
  usuarioJaSolicitou = false;
  usuarioEstaLogado = false;
  produtoDoAnunciante = false;
  campoParaEditarProduto = false;
  formularioEditarProduto = {
    Nome: '',
    Descricao: '',
    DataRegistro: '',
    Quantidade: '',
    Valor: '',
    CategoriaID: '',
    UsuarioID: ''
  }
  constructor(

    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
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
    this.obterIdDoUsuarioDetalhesDoProduto();
  }

  // Método para mostrar os detalhes do produto selecionado
  obterDetalhesPorId(idDoProduto, idDoUsuario, ) {
    this.produtoService.obterProdutoPorId(idDoProduto).subscribe(
      (resp: any) => {
        this.produtoAtual$ = resp[0];
        this.listarCategorias();
        this.OrganizarDadosProdutoEditar(this.produtoAtual$);
        this.usuarioJaSolicitouProduto(this.produtoAtual$.Id, this.idDoSolicitante);
        this.verificarProdutoEhDoUsuario(idDoUsuario, this.produtoAtual$.Id);      
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
      "UsuarioSolicitanteID": this.idDoSolicitante,
      "Quantidade": this.quantidadeDesejada
    }
    debugger
    this.interesseService.adicionarInteresse(pedidoInteresse).subscribe(
      res => {
        this.swalValidacaoDeRequisicaoDeInteresse(res);
      },
      err => { console.log(err) }
    );
  }

  // Método para ocultar o campo de interesse no produto
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
  obterIdDoUsuarioDetalhesDoProduto() {
    this.usuarioService.obterDadosDoUsuario().subscribe(
      (res: any) => {
        if (res.Id != undefined || res.Id != null)
          this.usuarioEstaLogado = true;
        this.obterDetalhesPorId(this.idDoProduto, res.Id)
        this.idDoSolicitante = res.Id;
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
        if (res.Validado)
          this.produtoDoAnunciante = true;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  // Método para habilitar campo de edição
  mostrarCampoEditarProduto() {
    this.campoParaEditarProduto = true;
    console.log(this.campoParaEditarProduto)
  }

  // Método para desabilitar o campo de edição
  cancelarEdicao() {
    this.campoParaEditarProduto = false;
  }

  // Método para editar o produto selecionado
  editarAnuncio(idDoProduto) {
    debugger
    this.produtoService.atualizarProduto(idDoProduto, this.formularioEditarProduto).subscribe(
      res => {
          this.swalValidacaoEdicaoProduto(res)
      },
      err => { }
    )
  }

  // Mostra um sweelAlert que valida se a atualizado do produto deu certo
  swalValidacaoEdicaoProduto(response) {
    if (response.Validado) {
      Swal.fire(
        'Massa!',
        response.Mensagem,
        'success'
      )
      window.location.reload();
    } else {
      Swal.fire(
        'Ops...',
        'Houve um problema, tente novamente mais tarde.',
        'error'
      )
    }
  }
  // Método para adquirir as categorias cadastradas
  listarCategorias() {
    this.categoriaService.obterCategorias().subscribe(
      (res: any) => {
        this.categorias$ = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  // Método para preencher os dados do produto atual para editar
  OrganizarDadosProdutoEditar(produtoAtual) {
    this.formularioEditarProduto.Nome = produtoAtual.Nome;
    this.formularioEditarProduto.Quantidade = produtoAtual.Quantidade;
    this.formularioEditarProduto.Descricao = produtoAtual.Descricao;
    this.formularioEditarProduto.Valor = produtoAtual.Valor;
    this.formularioEditarProduto.DataRegistro = produtoAtual.DataRegistro;
    this.formularioEditarProduto.CategoriaID = produtoAtual.Categoria.Id;
    this.formularioEditarProduto.UsuarioID = produtoAtual.Usuario.Id;
  }

  // Método para excluir o anuncio do produto
  // Sendo o usuário anunciante do mesmo
  removerAnuncio(idDoProduto) {
    this.produtoService.removerProduto(idDoProduto).subscribe(
      (res: any) => {
        if (res.Validado)
          Swal.fire(
            'Feito!',
            res.Mensagem,
            'success'
          )
        window.location.href = '/produtos';
      },
      (err: any) => {

      }
    )
  }

}
