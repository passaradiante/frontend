import { TestBed } from '@angular/core/testing';

import { CadastroProdutoService } from './cadastro-produto.service';

describe('CadastroUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroProdutoService = TestBed.get(CadastroProdutoService);
    expect(service).toBeTruthy();
  });
});
