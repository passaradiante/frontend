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

  usuarios$: any;
  formulario: FormGroup


  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      FullName:  [null, Validators.required],
      userName:  [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    let form = this.formulario;
    this.formEmailConverter(form);
    console.log(this.formulario.value);
    this.usuarioService
      .save(form.value)
      .subscribe(
        resp => this.SwalValidation(resp)
      );
  }

  SwalValidation(response) {
    if (response.Validado) {
      this.formulario.reset();
      Swal.fire(
        'Boa!',
        response.Mensagem,
        'success'
      )
      this.route.navigateByUrl('/');
    } else {
      Swal.fire({
        type: 'error',
        title: 'Ops...',
        text: response.Mensagem,
        footer: '<a href>Precisa de ajudar?</a>'
      })
    }

  }
  
  formEmailConverter(formulario: any){
    let atualEmail = formulario.value.Email;
    let minEmail = atualEmail.toLowerCase();
    return this.formulario.value.Email = minEmail;
  }


}