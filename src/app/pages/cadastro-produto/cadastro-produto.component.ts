import { Component, OnInit } from '@angular/core';
import { ProdutoCadastro } from '../../model/produtocadastro.model';
import { CadastroProdutoService } from 'src/app/services/cadastro-produto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produtoCadastro: ProdutoCadastro = new ProdutoCadastro();
  produtos:any = [];
  constructor(
    private service: CadastroProdutoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.service.listaProdutos()
      .then((result) => {
     this.produtos = result;
     console.log(this.produtos);
   }).catch((err) => {
   });
  }

  save() {
    if(!this.service.descricaoExiste(this.produtoCadastro.descricao, this.produtos)){
    this.service.cadastrar(this.produtoCadastro)
      .then((result) => {
        console.log(result);
        if(result == 200)
        alert('Cadastro de produto efetuado com sucesso!')
        this.router.navigateByUrl('/login');
        }).catch((err) => {
        alert(err);
    });
    this.produtoCadastro = new ProdutoCadastro();
    } else {
      alert("Produto já cadastrado!")
    }
  }

  onSubmit() {
    this.save();
  }


}