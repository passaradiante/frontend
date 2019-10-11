import { Component, OnInit } from '@angular/core';
import{PRODUTOS} from 'src/app/mock-produtos';
import{CadastroProdutoService} from 'src/app/services/cadastro-produto.service';
import { ProdutoCadastro } from 'src/app/model/produtocadastro.model';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
produtos= PRODUTOS;


  ngOnInit() {
  }

}
