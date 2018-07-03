import Veiculo from './Veiculo'

class Moto extends Veiculo {

      public acelerar(): void {
            this.velocidade = this.velocidade + 20
      }

}

//Podemos exportas a classe dessa forma tbm
export default Moto