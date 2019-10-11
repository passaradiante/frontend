import { Component, OnInit, Input } from '@angular/core';
import { ProdutoCadastro } from "src/app/model/produtocadastro.model";
import { CadastroProdutoService} from "src/app/services/cadastro-produto.service";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() produto: ProdutoCadastro;
  constructor(private CadastroProdutoService: CadastroProdutoService) { }


  ngOnInit() {
  }

}
