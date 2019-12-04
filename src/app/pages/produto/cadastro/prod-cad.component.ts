import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  idDoUsuario: string;
  dataAtual = new Date();

  constructor(
    private usuarioService: UsuarioService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private fb: FormBuilder
  ) { }

  // Métodos que irão 'startar' ao inicializar a página
  ngOnInit() {
    this.obterIdDoUsuarioCriarFormulario();
  }

  // Método para adquirir Id do Usuário
  // E iniciar o formulário de cadastro de produto+
  obterIdDoUsuarioCriarFormulario() {
    this.listarCategorias();
    this.usuarioService.obterDadosDoUsuario().subscribe(
      (res: any) => {
        this.idDoUsuario = res.Id;
        if (this.idDoUsuario != null) {
          this.novoFormularioDeCadastroProduto();
        }
      }
    )
  }

  // Método para cadastrar produto
  cadastrarProduto() {
    this.produtoService.adicionarProduto(this.formulario.value).subscribe(
      (res: any) => {
        this.swalValidacaoCadastroProduto(res);
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  // Método para adquirir as categorias cadastradas
  listarCategorias() {
    this.categoriaService.obterCategorias().subscribe(
      (res: any) => {
        this.categorias$ = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  // SweelAlert para validacao do cadastro
  // Mostra se obteve sucesso ou falha
  swalValidacaoCadastroProduto(response) {
    if (response.Validado) {
      this.formulario.reset();
      Swal.fire(
        'Feito!',
        'Produto cadastrado!',
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

  // Limpa todos os campos do formulário e adiciona os validadores
  novoFormularioDeCadastroProduto() {
    this.formulario = this.fb.group({
      Nome: [null, Validators.required],
      Descricao: [null, Validators.required],
      CategoriaID: [null, Validators.required],
      Quantidade: [null, Validators.required],
      Valor: [null, Validators.required],
      UsuarioID: this.idDoUsuario,
      DataRegistro: this.dataAtual
    });
  }

}
