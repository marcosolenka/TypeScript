class Lista {
    private elementos: number[] = [10, 20, 30];

    inserirInicio(valor: number): void {
        this.elementos.unshift(valor);
    }

    removerInicio(): number | undefined {
        return this.elementos.shift();
    }

    mostrar(): void {
        console.log(this.elementos);
    }
}

const lista = new Lista();

lista.mostrar();           // [10, 20, 30]

lista.inserirInicio(5);
lista.mostrar();           // [5, 10, 20, 30]

lista.removerInicio();
lista.mostrar();           // [10, 20, 30]