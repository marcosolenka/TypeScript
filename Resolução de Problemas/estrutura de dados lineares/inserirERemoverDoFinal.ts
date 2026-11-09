class Lista {
    private elementos: number[] = [10, 20, 30];

    inserirFinal(valor: number): void {
        this.elementos.push(valor);
    }

    removerFinal(): number | undefined {
        return this.elementos.pop();
    }

    mostrar(): void {
        console.log(this.elementos);
    }
}

const lista = new Lista();

lista.mostrar();           // [10, 20, 30]

lista.inserirFinal(40);
lista.mostrar();           // [10, 20, 30, 40]

lista.removerFinal();
lista.mostrar();           // [10, 20, 30]