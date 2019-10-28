import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { CategoriaService } from 'src/app/core/services/categoria.service';

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
            CategoriaId: [null, Validators.required],
            Quantidade: [null, Validators.required],
            Valor: [null, Validators.required],
            UsuarioId: this.idUsuario,
            DataRegistro: this.dataAtual
          });
        }
      }
    )

  }

  onSubmit() {
    this.produtoService.save(this.formulario.value).subscribe(
      (res: any) => {
        console.log(res);
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




}
