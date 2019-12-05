import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  produtos$: any = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obterListaDeProdutos();
  }

  // Método para listar os produtos
  obterListaDeProdutos(){
    this.produtoService.obterProdutos().subscribe(
      res => { console.log(res); this.produtos$ = res },
      err => { console.log(err);}
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
