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
  campoEditar;
  dadosAtualizados = {
    Id: '',
    City: '',
    Address: '',
    AddressNumber: ''
  }

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.campoEditar = false;
    this.obterUsuarioDados();
  }

  // Método para adquirir informações do usuário
  obterUsuarioDados() {
    this.usuarioService.obterDadosDoUsuario().subscribe(
      (res: any) => {
        this.dadosDoUsuario = res;
        this.dadosAtualizados.Id = res.Id;
        this.dadosAtualizados.City = res.City;
        this.dadosAtualizados.Address = res.Address;
        this.dadosAtualizados.AddressNumber = res.AddressNumber;
        this.idDoUsuario = res.Id;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  // Método para enviar os dados editados da conta do usuário
  editarDados() {
      this.usuarioService.atualizarUsuario(this.dadosAtualizados).subscribe(
      (res: any) => {
        this.swalValidacaoEdicaoConta(res);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  // Método para mostrar o campo para editar
  exibirCampoEditar() {
    this.campoEditar = true;
  }

  cancelarEdicao() {
    this.campoEditar = false;
  }


  // SweelAlert para validacao da edição
  // Mostra se obteve sucesso ou falha
  swalValidacaoEdicaoConta(response) {
    if (response.Validado) {
      Swal.fire(
        'Show!',
        response.Mensagem,
        'success'
      )
      this.ngOnInit();
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
