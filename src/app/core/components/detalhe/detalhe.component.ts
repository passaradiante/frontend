import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  itemId: any;
  dataProduto$: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.produto) {
        this.itemId = params.produto;
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
    this.produtoService.getProdutoById(this.itemId).subscribe(
      (resp: any) => {
        this.dataProduto$ = resp[0];
        console.log(this.dataProduto$);
      },
      (err: any) => {
        Swal.fire('Opss', 'Produto não encontrado!', 'error');
        this.router.navigateByUrl('/home');
      }
    );

  }


  


}
