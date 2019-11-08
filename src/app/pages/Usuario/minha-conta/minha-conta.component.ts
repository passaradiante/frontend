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

  usuarioDados: any;
  usuarioID: any;
  displayForm = false;
  editFormulario: FormGroup

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.usuarioService.dadosUsuario().subscribe(
      (res: any) => {
        this.usuarioDados = res;
        this.usuarioID = res.Id;
      },
      (err: any) => {
      }
    )
  }

  editAccount() {
    this.usuarioService.up(this.editFormulario.value).subscribe(
      (res: any) => {
        this.SwalValidation(res);
      },
      (err: any) => {

      }
    )
  }

  showFormEdit() {
    this.displayForm = true;
    this.editFormulario = this.fb.group({
      Nome: [this.usuarioDados.FullName, Validators.required],
      Descricao: [this.usuarioDados.Email, Validators.required],
    })
  }


  SwalValidation(response) {
    if (response.Validado) {
      this.editFormulario.reset();
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
