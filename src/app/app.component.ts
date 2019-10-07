import { Component } from '@angular/core';
import { UsuarioCadastro } from './model/usuariocadastro.model';
import {CadastroUsuarioService} from './services/cadastro-usuario.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';

}
