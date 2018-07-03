export interface DaoInterface<T> {
      nomeTabela: string
      
      inserir(obeject: T): boolean
      atualizar(object: T): boolean
      remover(id: number): T
      selecionar(id: number): T
      selecionarTodos(): Array<T>
}

