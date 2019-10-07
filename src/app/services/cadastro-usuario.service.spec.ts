import { TestBed } from '@angular/core/testing';

import { CadastroUsuarioService } from './cadastro-usuario.service';

describe('CadastroUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroUsuarioService = TestBed.get(CadastroUsuarioService);
    expect(service).toBeTruthy();
  });
});
