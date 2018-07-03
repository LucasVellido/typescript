import Carro from './Carro'
import Pessoa  from './Pessoa'
import Concessionaria from './Concessionaria'

/* ----criar carros ----*/
let carroA = new Carro('Corolla', 4)
let carroB = new Carro('Voyage', 4)
let carroC = new Carro('Veloster', 3)

/*----montar a lista de carros----*/
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros)

/* ---exibir a lista de Carros ---*/
//console.log(concessionaria.mostrarListaDeCarros())

/*---comprar o carro ---*/
let cliente = new Pessoa('Lucas', 'Corolla')

/*---dizer carro preferido---*/
//console.log('Carro preferido do cliente: ' + cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
      if(carro['modelo'] == cliente.dizerCarroPreferido()) {

            //cliente comprando carro
            cliente.comprarCarro(carro)
      }

})

console.log(cliente.dizerCarroQueTem())



