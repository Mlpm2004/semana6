# semana6
#Ex 1 - Módulos Javascript

Antigamente, o JavaScript era utilizado para adicionar pequenas interações e animações em páginas da web. Com o avanço da utilização, os scripts passaram a ficar muito grandes e complexos.
Posto este cenário, quais as duas maiores vantagens de se utilizar módulos no JavaScript?

1) Manutenibilidade: Por definição, um módulo é auto-suficiente, quando bem projetado visa diminuir as dependências em partes da base de código, tanto quanto possível, de modo que ele possa crescer e melhorar de forma independente. Atualizando um único módulo é muito mas fácil quando o mesmo é dissociado de outros pedaços de códigos.
2) Namespacing: Em JavaScript, variáveis fora do escopo de uma função de nível superior são globais (ou seja, todos podem acessá-la). Devido a isso é comum ter a “poluição de namespace”, onde completamente existem códigos compartilhados sem referência variáveis globais.
3) Reusabilidade: Um módulo pode ser reutilizável

#Ex 3 - Tree shaking

Explique com suas palavras o que é tree shaking e como isso pode beneficiar os desenvolvedores que fazem uso de módulos no Javascript.

Eliminação de códigos que não são utilizados por um determinado sistema, reduzindo o tamanho dos arquivos e o peso da aplicação.
