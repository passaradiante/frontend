import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prod-cad',
  templateUrl: './prod-cad.component.html',
  styleUrls: ['./prod-cad.component.css']
})
export class ProdCadComponent implements OnInit {

  categorias$: any;
  formulario: FormGroup;
  idUsuario: string;
  dataAtual = new Date();

  constructor(
    private usuarioService: UsuarioService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getCateg();
    this.usuarioService.dadosUsuario().subscribe(
      (res: any) => {
        this.idUsuario = res.Id;
        console.log(this.idUsuario);
        if(this.idUsuario != null){
          this.formulario = this.fb.group({
            Nome: [null, Validators.required],
            Descricao: [null, Validators.required],
            CategoriaID: [null, Validators.required],
            Quantidade: [null, Validators.required],
            Valor: [null, Validators.required],
            UsuarioID: this.idUsuario,
            DataRegistro: this.dataAtual
          });
        }
      }
    )

  }

  onSubmit() {
    this.produtoService.save(this.formulario.value).subscribe(
      (res: any) => {
        this.SwalValidation(res);
      },
      (err: any) => {

      }
    )
  }

  getCateg() {
    this.categoriaService.getCategorias().subscribe(
      (res: any) => {
        this.categorias$ = res;
        console.log(this.categorias$)
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  SwalValidation(response) {
    if (response.Validado) {
      this.formulario.reset();
      Swal.fire(
        'Show!',
        response.Mensagem,
        'success'
      )
    } else {
      Swal.fire({
        type: 'error',
        title: 'Ops...',
        text: 'Houve um problema, tente novamente!',
        footer: '<a href>Precisa de ajudar?</a>'
      })
    }
  }


}
