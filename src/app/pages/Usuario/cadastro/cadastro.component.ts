import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  formulario: FormGroup
  acessoUsuarioNovo = {  userName: '',  Password: '' };

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.novoFormularioCadastroUsuario();
  }

  // Método para criar um novo formulário
  novoFormularioCadastroUsuario(){
    this.formulario = this.fb.group({
      FullName:  [null, Validators.required],
      City: [null, Validators.required],
      Address: [null, Validators.required],
      AddressNumber: [null, Validators.required],
      userName:  [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  // Método que cadastrar o usário, passando o formulario para API
  cadastrarUsuario() {
    this.formatarEmailMinusculo(this.formulario);
    this.usuarioService.adicionarUsuario(this.formulario.value).subscribe(
        resp => this.SwalValidacaoCadastroUsuario(resp, this.formulario.value)
      );
  }

  // SweelAlert para validacao do cadastro do usuário
  // Mostra se obteve sucesso ou falha
  SwalValidacaoCadastroUsuario(response, formulario) {
    if (response.Validado) {
      Swal.fire(
        'Boa!',
        'Seja bem-vindo(a)!',
        'success'
      )
      this.delay(3000);
      this.logarUsuarioNovo(formulario);
    } else {
      Swal.fire({
        type: 'error',
        title: 'Ops...',
        text: response.Mensagem,
        footer: '<a href>Precisa de ajudar?</a>'
      })
    }
  }

  // Método para logar após confirmação do cadastro do usuário
  logarUsuarioNovo(formulario) {
    this.formatarFormularioParaLogar(formulario);
    this.usuarioService.logarUsuario(this.acessoUsuarioNovo).subscribe(
      (resp: any) => {
        if (resp.token != undefined || resp.token != null) {
          localStorage.setItem('token', resp.token);
          window.location.href = '/';
        } else {
          Swal.fire('Ops..', resp.Mensagem, 'error')
        }
      },
      (err: any) => {
          console.log(err)
      });
  }
  
  // Antes de enviar, pega o email do usuário e deixa minisculo
  formatarEmailMinusculo(formulario){
    let atualEmail = formulario.value.Email;
    let minEmail = atualEmail.toLowerCase();
    return this.formulario.value.Email = minEmail;
  }

  // Método para formatar os dados do usuário cadastrado
  // para poder logar
  formatarFormularioParaLogar(formulario) {
    this.acessoUsuarioNovo.userName = formulario.userName;
    this.acessoUsuarioNovo.Password = formulario.Password;
  }

  // Método para delay
   delay(ms): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

}