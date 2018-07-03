import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro  = new Carro('Corolla', 4)
carro.acelerar();
carro.parar();

let moto = new Moto();
moto.acelerar();

let concessionaria = new Concessionaria('', [])

console.log(moto)
console.log(carro)

console.log(concessionaria.fornecerHorariosDeFuncionamento())