import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface<> {

      nomeTabela: string = 'tb_concessionaria';  

      inserir(obeject: Pessoa): boolean {
            console.log('lógica de insert')
            return true
      }

      atualizar(object: Pessoa): boolean {
            console.log('lógica de update')
            return true
      }

      remover(id: number): Pessoa {
            console.log('lógica de remove')
            return new Pessoa('Lucas', 'Corolla')
      }

      selecionar(id: number): Pessoa {
            console.log('lógica de select')
            return new Pessoa('Lucas', 'Corolla')
      }

      selecionarTodos(): [any] {
            console.log('lógica de select all')
            return [new Pessoa('Lucas', 'Corolla')]     
      }
}
