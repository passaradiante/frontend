import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  produtos$: any = [];

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      res => { this.produtos$ = res }
    );
  }

}
