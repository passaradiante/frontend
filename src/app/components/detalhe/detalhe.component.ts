import { Component, OnInit } from '@angular/core';
import{PRODUTOS} from 'src/app/mock-produtos';
import { ProdutoCadastro } from 'src/app/model/produtocadastro.model';
@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
