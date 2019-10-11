import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';

describe('CadastroUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioService = TestBed.get(UsuarioService);
    expect(service).toBeTruthy();
  });
});
