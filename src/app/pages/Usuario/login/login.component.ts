import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      userName: [null, Validators.required],
      Password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  OnSubmit() {
    let form = this.formulario;
    console.log(this.formulario.value);
    this.usuarioService.logar(form.value).subscribe(
      (resp: any) => {
        localStorage.setItem('token', resp.token);
        window.location.href = '/';
      },
      (err: any) => {
        alert('Considerado, tem erro, olha o console.'),
          console.log(err)
      })

  }



}
