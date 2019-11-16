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
  itemId: any;
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

    if(this.qntDesejada < 1){
      this.SwalValidation(false)
      return
    }

    this.idProduto = this.produtoAtual$.Id;
    this.idSolicitante = this.idSolicitante;

    const request = {
      "ProdutoID": this.idProduto,
      "UsuarioSolicitanteID": this.idSolicitante,
      "Quantidade": this.qntDesejada
    }
  
    this.interesseService.sendInteresse(request).subscribe(
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
        'Enviado sua solicitação para o anunciante, aguarde seu retorno!',
        'success'
      )
      this.router.navigateByUrl('/produtos');
    } else {
      Swal.fire(
        'Ops...',
        `Ei, ${!response ? 'coloque uma quantidade válida!': 'Ocorreu um problema, favos nos contactar no campo: Feedback!' }`,
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
