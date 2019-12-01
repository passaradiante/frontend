import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  dadosDoUsuario: any;
  idDoUsuario: any;
  campoEditar = false;
  formularioEdicao: FormGroup

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.obterUsuarioDados();
  }

  // Método para adquirir informações do usuário
  obterUsuarioDados() {
    this.usuarioService.obterDadosDoUsuario().subscribe(
      (res: any) => {
        this.dadosDoUsuario = res;
        this.idDoUsuario = res.Id;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  // Método para enviar os dados editados da conta do usuário
  editarConta() {
    this.usuarioService.atualizarUsuario(this.formularioEdicao.value).subscribe(
      (res: any) => {
        this.swalValidacaoEdicaoConta(res);
      },
      (err: any) => {

      }
    )
  }

  // Método para mostrar o campo para editar
  exibirCampoEditar() {
    this.campoEditar = true;
    
    // Método para gerar um novo formulário para editar os dados
    this.formularioEdicao= this.fb.group({
      Nome: [this.dadosDoUsuario.FullName, Validators.required],
      Descricao: [this.dadosDoUsuario.Email, Validators.required],
    })
  }


  // SweelAlert para validacao da edição
  // Mostra se obteve sucesso ou falha
  swalValidacaoEdicaoConta(response) {
    if (response.Validado) {
      this.formularioEdicao.reset();
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
