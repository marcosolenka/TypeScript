// Considere uma classe que tem, como único atributo, um inteiro positivo n. Implemente um método,
// denominado primeirosPrimos(), que retorne uma lista com os n primeiros números primos. O próprio
// método deve fazer o teste de primalidade. Projete uma solução eficiente.
// Exemplo, para n = 25:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
//Verificar método de erastóstenes


class NumerosPrimos {

    public primeirosPrimos(n: number): number[] {
        const primos: number[] = [];

        let numero = 2;

        while (primos.length < n) {

            let divisores = 0;

            for (let i = 1; i <= numero; i++) {

                if (numero % i === 0) {
                    divisores += 1;
                }

                if (divisores >= 3) {
                    break;
                }
            }

            if (divisores === 2) {
                primos.push(numero);
            }

            numero++;
        }

        return primos;
    }
}

// Exemplo
const numeros = new NumerosPrimos();

console.log(numeros.primeirosPrimos(-2));