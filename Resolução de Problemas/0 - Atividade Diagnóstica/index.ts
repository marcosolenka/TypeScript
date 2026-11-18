export default class Network {
    private contatos = new Map<string, string[]>()

    //adcionar direcional
    public add(a: string, b: string): boolean {
        let lista = this.contatos.get(a);

        if (lista === undefined) {
            this.contatos.set(a, [b]);
            return true;
        }

        if (lista.includes(b)) {
            return false;
        }

        lista.push(b);
        return true;
    }

    private adicionarConexao(a: string, b: string): boolean {
        let lista = this.contatos.get(a)

        if (lista === undefined) {
            this.contatos.set(a, [b])
            return true
        }

        if (lista.includes(b)) {
            return false
        }

        lista.push(b)
        return true

    }   

public addbi(a: string, b: string): boolean {
    let resultado = this.adicionarConexao(a, b)
    this.adicionarConexao(b, a)
    return resultado
    }

    //todas as conexões possíveis
    public getConnected(a: string): string[] {
        let conectados: string[] = []
        let pendentes: string[] = [a]

        while (pendentes.length > 0) {
            let atual = pendentes[0]
            pendentes.shift()

            let vizinhos = this.contatos.get(atual)

            if (vizinhos !== undefined) {
                for (let i = 0; i < vizinhos.length; i++) {
                    let vizinho = vizinhos[i]

                    if (!conectados.includes(vizinho) && vizinho !== a) {
                        conectados.push(vizinho)
                        pendentes.push(vizinho)
                    }
                }
            }
        }

        conectados.sort()
        return conectados
    }

    // Com quem não conecta
    public getNotConnected(a: string): string[] {
        let todas: string[] = Array.from(this.contatos.keys())
        let conexoes = this.getConnected(a)
        let posicaoA = todas.indexOf(a)

        if (posicaoA !== -1) {
            todas.splice(posicaoA, 1)
        }
        
        for (let i = 0; i < conexoes.length; i++) {
            let posicao = todas.indexOf(conexoes[i])

            if (posicao !== -1) {
                todas.splice(posicao, 1)
            }
        }
        todas.sort()
        return todas
    }

    //remover direcional
    public remove(a: string, b: string): boolean {
        let removeu = false
        let lista = this.contatos.get(a)
         if(lista === undefined){
            return false
        }
        for(let i = 0; i < lista.length; i++){
            if(b === lista[i]){
                lista.splice(i, 1)
                removeu = true
            }
        }

        return removeu 
    }

    private removerConexao(a: string, b: string): boolean {
        let lista = this.contatos.get(a)

        if (lista === undefined) {
            return false
        }

        for (let i = 0; i < lista.length; i++) {
            if (b === lista[i]) {
                lista.splice(i, 1)
                return true
            }
        }

        return false
    }

    public removeBi(a: string, b: string): boolean {
        let removeu = this.removerConexao(a, b)
        this.removerConexao(b, a)

        return removeu
    }

    // rostas diferntes possíveis
    public countPaths(a: string, d: string): number {
        let visitados: string[] = []

        const buscar = (atual: string): number => {
            if (atual === d) {
                return 1
            }

            visitados.push(atual)

            let quantidade = 0
            let vizinhos = this.contatos.get(atual)

            if (vizinhos !== undefined) {
                for (let i = 0; i < vizinhos.length; i++) {
                    let vizinho = vizinhos[i]

                    if (!visitados.includes(vizinho)) {
                        quantidade += buscar(vizinho)
                    }
                }
            }

            visitados.pop()
            return quantidade
        }

        return buscar(a)
    }

    //todos os caminhos
    public countPathsWithRepetition(a: string, d: string): number {
        const limite = 5

        const buscar = (atual: string, passos: number): number => {
            if (atual === d) {
                return 1
            }

            if (passos >= limite) {
                return 0
            }

            let quantidade = 0
            let vizinhos = this.contatos.get(atual)

            if (vizinhos !== undefined) {
                for (let i = 0; i < vizinhos.length; i++) {
                    quantidade += buscar(vizinhos[i], passos + 1)
                }
            }

            return quantidade
        }

        return buscar(a, 0)
    }

    //se todas conectadas Fatorial
    public contarCaminhos(cidadeInicial: string): number {
        let totalCidades = this.contatos.size

        let resultado = 1

        for (let i = 1; i < totalCidades; i++) {
            resultado *= i
        }

        return resultado
    }

    

}

let network = new Network

// network.add("a", "b")
// network.add("a", "c")
// network.add("c", "d")
// network.add("e", "f")
// network.add("g", "e")
// console.log(network.getConnected("a"))
// console.log(network.getNotConnected("a"))

network.add("10", "11")
network.add("10", "7")
network.add("7", "9")
network.add("4", "18")
network.add("2", "4")
console.log(network.getConnected("10"))
console.log(network.getNotConnected("10"))




export default class Network {
    private contatos = new Map<string, string[]>()

    // ==========================================
    // NOVAS FUNÇÕES: INCLUIR E EXCLUIR ITENS (NÓS)
    // ==========================================

    /**
     * Inclui um novo item (nó) na rede, caso ele ainda não exista.
     */
    public addItem(item: string): boolean {
        if (this.contatos.has(item)) {
            return false // O item já existe
        }
        this.contatos.set(item, [])
        return true
    }

    /**
     * Remove completamente um item da rede:
     * - Apaga o nó do Map principal.
     * - Remove todas as referências/conexões que outros nós tinham para ele.
     */
    public removeItem(item: string): boolean {
        if (!this.contatos.has(item)) {
            return false // O item não existe
        }

        // 1. Remove o próprio item do Map
        this.contatos.delete(item)

        // 2. Remove o item das listas de conexões de todos os outros nós
        this.contatos.forEach((vizinhos, no) => {
            let index = vizinhos.indexOf(item)
            if (index !== -1) {
                vizinhos.splice(index, 1)
            }
        })

        return true
    }

    // ==========================================
    // MÉTODOS EXISTENTES (COM PEQUENOS AJUSTES)
    // ==========================================

    // Adicionar direcional
    public add(a: string, b: string): boolean {
        // Garante que ambos os nós existam no grafo para aparecerem em getNotConnected
        if (!this.contatos.has(a)) this.addItem(a)
        if (!this.contatos.has(b)) this.addItem(b)

        let lista = this.contatos.get(a)!

        if (lista.includes(b)) {
            return false
        }

        lista.push(b)
        return true
    }

    private adicionarConexao(a: string, b: string): boolean {
        if (!this.contatos.has(a)) this.addItem(a)
        if (!this.contatos.has(b)) this.addItem(b)

        let lista = this.contatos.get(a)!

        if (lista.includes(b)) {
            return false
        }

        lista.push(b)
        return true
    }   

    public addbi(a: string, b: string): boolean {
        let resultado = this.adicionarConexao(a, b)
        this.adicionarConexao(b, a)
        return resultado
    }

    // Todas as conexões possíveis (Alcance por BFS)
    public getConnected(a: string): string[] {
        let conectados: string[] = []
        let pendentes: string[] = [a]
        let visitados = new Set<string>([a])

        while (pendentes.length > 0) {
            let atual = pendentes.shift()!
            let vizinhos = this.contatos.get(atual)

            if (vizinhos !== undefined) {
                for (let i = 0; i < vizinhos.length; i++) {
                    let vizinho = vizinhos[i]

                    if (!visitados.has(vizinho)) {
                        visitados.add(vizinho)
                        conectados.push(vizinho)
                        pendentes.push(vizinho)
                    }
                }
            }
        }

        conectados.sort()
        return conectados
    }

    // Com quem não conecta
    public getNotConnected(a: string): string[] {
        let todas: string[] = Array.from(this.contatos.keys())
        let conexoes = this.getConnected(a)
        let naoConectados: string[] = []

        let conjuntoExcluidos = new Set(conexoes)
        conjuntoExcluidos.add(a)

        for (let i = 0; i < todas.length; i++) {
            let item = todas[i]
            if (!conjuntoExcluidos.has(item)) {
                naoConectados.push(item)
            }
        }

        naoConectados.sort()
        return naoConectados
    }

    // Remover direcional
    public remove(a: string, b: string): boolean {
        let lista = this.contatos.get(a)
        if (lista === undefined) {
            return false
        }

        for (let i = 0; i < lista.length; i++) {
            if (b === lista[i]) {
                lista.splice(i, 1)
                return true
            }
        }

        return false 
    }

    private removerConexao(a: string, b: string): boolean {
        let lista = this.contatos.get(a)

        if (lista === undefined) {
            return false
        }

        for (let i = 0; i < lista.length; i++) {
            if (b === lista[i]) {
                lista.splice(i, 1)
                return true
            }
        }

        return false
    }

    public removeBi(a: string, b: string): boolean {
        let removeuA = this.removerConexao(a, b)
        let removeuB = this.removerConexao(b, a)

        return removeuA || removeuB
    }

    // Rotas diferentes possíveis
    public countPaths(a: string, d: string): number {
        let visitados: string[] = []

        const buscar = (atual: string): number => {
            if (atual === d) {
                return 1
            }

            visitados.push(atual)

            let quantidade = 0
            let vizinhos = this.contatos.get(atual)

            if (vizinhos !== undefined) {
                for (let i = 0; i < vizinhos.length; i++) {
                    let vizinho = vizinhos[i]

                    if (!visitados.includes(vizinho)) {
                        quantidade += buscar(vizinho)
                    }
                }
            }

            visitados.pop()
            return quantidade
        }

        return buscar(a)
    }

    // Todos os caminhos com repetição limitada
    public countPathsWithRepetition(a: string, d: string): number {
        const limite = 5

        const buscar = (atual: string, passos: number): number => {
            if (atual === d) {
                return 1
            }

            if (passos >= limite) {
                return 0
            }

            let quantidade = 0
            let vizinhos = this.contatos.get(atual)

            if (vizinhos !== undefined) {
                for (let i = 0; i < vizinhos.length; i++) {
                    quantidade += buscar(vizinhos[i], passos + 1)
                }
            }

            return quantidade
        }

        return buscar(a, 0)
    }

    // Se todas conectadas Fatorial
    public contarCaminhos(cidadeInicial: string): number {
        let totalCidades = this.contatos.size
        let resultado = 1

        for (let i = 1; i < totalCidades; i++) {
            resultado *= i
        }

        return resultado
    }
}
