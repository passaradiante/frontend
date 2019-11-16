import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  itemSelecionado: number;
  produtos$: any = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      res => { this.produtos$ = res }
    );
  }

  openDetails(id) {
    let params: NavigationExtras = {
      queryParams: {
        produto: id
      }
    }
    this.router.navigate(['detalhes-produto'], params);
  }

}
