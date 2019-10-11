import { Component } from '@angular/core';
import { Usuario } from './model/usuario.model';
import {UsuarioService} from './services/usuario.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';

}
