class Lista {
    private elementos: number[] = [10, 20, 30, 40, 50];

    inserirPosicao(posicao: number, valor: number): void {
        this.elementos.splice(posicao, 0, valor);
    }

    removerPosicao(posicao: number): number | undefined {
        const removido = this.elementos.splice(posicao, 1);

        return removido[0];
    }

    mostrar(): void {
        console.log(this.elementos);
    }
}

const lista = new Lista();

lista.mostrar();                   // [10, 20, 30, 40, 50]

lista.inserirPosicao(2, 25);
lista.mostrar();                   // [10, 20, 25, 30, 40, 50]

lista.removerPosicao(3);
lista.mostrar();                   // [10, 20, 25, 40, 50]