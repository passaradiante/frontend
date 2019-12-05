import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../core/services/produto.service';
import { Router, NavigationExtras } from '@angular/router';
import { UsuarioService } from '../../../core/services/usuario.service';

@Component({
  selector: 'app-meus-produtos',
  templateUrl: './meus-produtos.component.html',
  styleUrls: ['./meus-produtos.component.css']
})
export class MeusProdutosComponent implements OnInit {

  idDoUsuario: string;
  meusProdutos$: any = null;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.obterDadosUsuarioProdutos();
  }

  // Método para buscar ID do usuário
  obterDadosUsuarioProdutos() {
    this.usuarioService.obterDadosDoUsuario().subscribe(
      (res: any) => {
        this.idDoUsuario = res.Id;
        this.obterListaProdutosDoUsuario(this.idDoUsuario);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  // Método para listar os produtos do usuário
  obterListaProdutosDoUsuario(idDoUsuario) {
    this.produtoService.obterProdutosPorUsuario(idDoUsuario).subscribe(
      (res: any) => {
        console.log(res)
        this.meusProdutos$ = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  // Método para mostrar os detalhes do produto
  // Enviando o Id para a página [detalhes-produto]
  verDetalhesDoProduto(id) {
    let params: NavigationExtras = {
      queryParams: {
        produto: id
      }
    }
    this.router.navigate(['detalhes-produto'], params);
  }
  
}
