class Lista {
    private elementos: number[] = [10, 20, 30, 40, 50];

    consultarInicio(): number | undefined {
        return this.elementos[0];
    }

    consultarFinal(): number | undefined {
        return this.elementos[this.elementos.length - 1];
    }

    consultarPosicao(posicao: number): number | undefined {
        return this.elementos[posicao];
    }
}

const lista = new Lista();

console.log(lista.consultarInicio());     // 10

console.log(lista.consultarFinal());      // 50

console.log(lista.consultarPosicao(2));   // 30