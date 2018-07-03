import Concessionaria from './Concessionaria'
import { ConcessionariaDao } from './ConcessionariaDao'
import { PessoaDao } from './PessoaDao'
import Pessoa from './Pessoa';
import { Dao } from './Dao';

//let daoConcessionaria: ConcessionariaDao = new ConcessionariaDao()
//let daoPessoa: PessoaDao = new PessoaDao()

let concessionaria = new Concessionaria('', [])
let pessoa = new Pessoa('Lucas', 'Corolla')

let daoConcessionaria: Dao<Concessionaria> = new Dao<Concessionaria>();
let daoPessoa: Dao<Pessoa> = new Dao<Pessoa>();

daoConcessionaria.inserir(concessionaria)
daoPessoa.remover(1)