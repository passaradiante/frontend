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

  interesse = false;
  itemId: any;
  produtoAtual$: any;
  idProduto: number;
  idAnunciante: number;

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
        this.produtoAtual$ = resp[0];
      },
      (err: any) => {
        Swal.fire('Opss', 'Produto não encontrado!', 'error');
        this.router.navigateByUrl('/home');
      }
    );

  }

  interest() {
    this.interesse = true;
  }

  sendRequest() {
    this.idProduto = this.produtoAtual$.Id;
    this.idAnunciante = this.produtoAtual$.Usuario.Id;

    const request = {
      "ProdutoID": this.idProduto
    }

    this.produtoService.interesse(request).subscribe(
      res => {
        this.SwalValidation(res);
      },
      err => {console.log(err)}
    );
       
  }

  cancelRequest() {
    this.interesse = false;
  }
  
  SwalValidation(response) {
    if (response.Validado) {
      Swal.fire(
        'Massa!',
        'Enviado mensagem para o anunciante, aguarde!',
        'success'
      )
      this.router.navigateByUrl('/produtos');
    } else {
      Swal.fire({
        type: 'error',
        title: 'Ops...',
        text: 'Houve um problema, tente novamente!'
      })
    }
  }



}
