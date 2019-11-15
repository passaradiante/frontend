import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';


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
  idSolicitante: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
    private usuarioService: UsuarioService) {
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
    this.getId();
    this.produtoService.getProdutoById(this.itemId).subscribe(
      (resp: any) => {
        this.produtoAtual$ = resp[0];
      },
      (err: any) => {
        Swal.fire('Ops', 'Produto não encontrado!', 'error');
        this.router.navigateByUrl('/');
      }
    );

  }

  showInterest() {
    this.interesse = true;
  }

  sendRequest() {
    this.idProduto = this.produtoAtual$.Id;
    this.idSolicitante = this.idSolicitante;

    const request = {
      "ProdutoID": this.idProduto,
      "UsuarioSolicitanteID": this.idSolicitante
    }

    this.produtoService.sendInteresse(request).subscribe(
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

  getId() {
    this.usuarioService.dadosUsuario().subscribe(
      (res: any) => {
        this.idSolicitante = res.Id;
      },
    )
  }


}
