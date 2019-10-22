import { Component, OnInit } from '@angular/core';
import{PRODUTOS} from 'src/app/mock-produtos';
import{CadastroProdutoService} from 'src/app/services/cadastro-produto.service';
import { ProdutoCadastro } from 'src/app/model/produtocadastro.model';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
produtos= PRODUTOS;
  constructor() { }

  ngOnInit() {
  }

}
