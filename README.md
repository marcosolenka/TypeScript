# TypeScript
TypeScript codes

# Cronograma de Aprendizado gerado pelo GEMNI

Aprender TypeScript é um excelente passo para escrever códigos mais seguros e escaláveis. Como ele é um superconjunto do JavaScript, a curva de aprendizado foca quase que inteiramente no sistema de tipos e na compilação.

Aqui está um cronograma de 8 semanas projetado para levar você dos fundamentos às funcionalidades avançadas, focando no que realmente importa no dia a dia.
Módulo 1: Fundamentos e Setup
Semanas 1 e 2

O objetivo inicial é entender como o compilador funciona e dominar a tipagem básica.

    Configuração: Instale o Node.js (se estiver no Ubuntu, gerenciar as versões via NVM é a melhor abordagem) e instale o compilador globalmente rodando npm i -g typescript.

    Tipos Primitivos e Especiais: Domine string, number, boolean, e entenda a diferença crucial entre any (que desativa a checagem de tipos e deve ser evitado), unknown, void e never.

    Inferência de Tipos: Aprenda a identificar quando o TypeScript é inteligente o suficiente para deduzir tipos nativamente, poupando você de escrever código redundante.

    Arrays e Tuplas: Estruture listas de dados homogêneos e coleções de tamanho fixo.

Módulo 2: Estruturas Intermediárias
Semanas 3 e 4

Nesta fase, você começará a moldar os dados da sua aplicação e a criar contratos claros.

    Type Aliases e Interfaces: Aprenda a definir as formas dos seus objetos. Entender quando usar type ou interface é uma das habilidades mais importantes do nível intermediário.

    Union e Intersection Types: Combine tipos para criar flexibilidade (A | B) ou agrupar várias estruturas em uma só (A & B).

    Funções e Overloads: Adicione tipagem para parâmetros, defina retornos obrigatórios, gerencie parâmetros opcionais e crie assinaturas diferentes para a mesma função (overloads).

    Enums: Agrupe valores constantes e nomeados para facilitar a leitura de regras de negócio.

Módulo 3: POO, Generics e Decorators
Semanas 5 e 6

Este é o ponto de virada para o nível avançado. Os conceitos aqui são a base da criação de bibliotecas e aplicações robustas.

    Classes e Modificadores: Controle a visibilidade de propriedades e métodos usando public, private, protected e readonly.

    Generics: O recurso mais poderoso da linguagem. Aprenda a criar componentes, interfaces e funções reutilizáveis que funcionam com qualquer tipo que você injetar neles (<T>).

    Type Guards e Narrowing: Técnicas para garantir a segurança dos tipos em tempo de execução através de verificações lógicas como typeof e instanceof.

    Decorators: Metaprogramação essencial. Se você for criar aplicações frontend usando o CLI de frameworks estruturados (como rodar um ng new no Angular), dominar os decorators é um requisito obrigatório.

Módulo 4: Maestria e Configurações
Semanas 7 e 8

Hora de usar utilitários avançados e preparar o código para ambientes de produção.

    Utility Types: Transforme tipos existentes sem precisar reescrevê-los. Pratique intensamente o uso de Partial, Pick, Omit, Readonly e Record.

    Configuração Avançada (tsconfig.json): Entenda como configurar o strict mode, definir os targets de compilação corretos para o seu ambiente e mapear caminhos absolutos.

    Integração Prática: Inicie um projeto que conecte diferentes partes da infraestrutura. Você pode construir um backend Node.js tipado que seja fácil de conteinerizar com Docker e servir atrás de um proxy reverso Nginx.