//Dados dois números inteiros positivos, A e B, retorne o primeiro múltiplo de A depois de B.

export default class Exercicio1{

    public firstMultiple(a: number, b: number): number{
      return (Math.floor(b / a) + 1) * a;
    }
}