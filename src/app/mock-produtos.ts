
import { ProdutoCadastro } from '../app/model/produtocadastro.model';

export const PRODUTOS: ProdutoCadastro[] = [
    {
        id: 1,
        nome: 'Cadeira de roda',
        descricao: 'Para pessoas que tem problemas em locomoção',
        valor: '50',
        fotoUrl: './assets/images/cadeiraroda.png',
        telefone:'(85)956545412',
        email:'tiago.dantas95@gmail.com'
    },
    {
        id: 2,
        nome: 'Muleta',
        descricao: 'Para pessoas que tem problemas nas pernas',
        valor: '90',
        fotoUrl: './assets/images/muleta.png',
        telefone:'(85)9565434312',
        email:'saulo@gmail.com'

    },
    {
        id: 3,
        nome: 'Respirador',
        descricao: 'Para pessoas que tem problemas para respirar',
        valor: '150',
        fotoUrl: './assets/images/respirador.png',
        telefone:'(85)954587122412',
        email:'emilio@gmail.com'

    }
];