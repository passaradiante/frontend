import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.novoFormularioDeLogin();
  }

  novoFormularioDeLogin() {
    this.formulario = this.fb.group({
      userName: [null, Validators.required],
      Password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    let form = this.formulario;
    this.usuarioService.logarUsuario(form.value).subscribe(
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
      })
  }

}
