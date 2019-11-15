import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ProdutoInteresseService } from '../../services/produtointeresse.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  notificacoes$:any;
  idUsuario: string;

  constructor(
    private usuarioService: UsuarioService,
    private interesseService: ProdutoInteresseService) { }
  
  ngOnInit() {
    this.getId();
  }

  getId() {
    this.usuarioService.dadosUsuario().subscribe(
      (res: any) => {
        this.idUsuario = res.Id;
        console.log(this.idUsuario);
        this.getInteresses(this.idUsuario);
      },
    )
  }

  getInteresses(id) {
    this.interesseService.getInteresseById(id).subscribe(
      (res: any) => {
        console.log(res);
        this.notificacoes$ = res;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  lidoInteresse(id){
    this.interesseService.comoLido(id).subscribe(
      (res: any) => {
        if(res.Validado)
        this.ngOnInit();
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

}
