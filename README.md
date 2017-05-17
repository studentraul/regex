# Curso Regex Alura

Repositório com foco em fazer anotações e resenhas sobre o [Curso online de Expressões regulares: Capturando textos de forma mágica](https://www.alura.com.br/curso-online-expressoes-regulares)

> [PROJETO ONLINE](https://studentraul.github.io/regex/)

## Anotações pessoais
[Rascunhos e ideias](aulas/anotacoes.md)

## Lista com as expressões

| caracter      | Tipo                      | Significado                                                                   | Metachar  |
| :---:         | ---                       | ---                                                                           | :---:     | 
| \d            | _**Classe de caracter**_  | Dígitos de 0-9                                                                | Não       |
| \w            | _**Classe de caracter**_  | Alfanumérico, ou seja, [A-Za-z0-9_]                                           | Sim       |                     | Não       |
| \s            | _**Classe de caracter**_  | O caracter pode qualquer espaço em branco (tab, space, etc)                   | sim       |
| .             | _**Classe de caracter**_  | Qualquer caracter                                                             | Sim       |
| {n}           | _**Quantifier**_          | O caracter pode aparecer exatamente `n` vezes                                 | Sim       |
| {n,}          | _**Quantifier**_          | O caracter pode aparecer `n ou mais` vezes                                    | Sim       |
| {n,m}         | _**Quantifier**_          | O caracter pode aparecer `n até m` vezes                                      | Sim       |
| +             | _**Quantifier**_          | O caracter pode aparecer `1 ou mais` vezes.                                   | Sim       |
| *             | _**Quantifier**_          | O caracter pode aparecer `0 ou mais` vezes.                                   | Sim       |
| ?             | _**Quantifier**_          | O caracter pode aparecer `0 ou 1` vez                                         | Sim       |
| [ ]           | _**Classe de caracter**_  | Define um conjunto de caracteres que PODEM aparecer                           | sim       |
| ( )           | _**Classe de caracter**_  | Define um GRUPO de caracteres (será trazido nos resultados)                   | sim       |
| ?:            | _**Quantifier**_          | Usado dentro do grupo, define que o resultado da expressão **NÃO** deverá ser retornado   | sim       |
| ^             | _**Classe de caracter**_  | Nega uma expressão ou valor, ou seja, `^[A-Z] - Pegue tudo que não for A-Z`   | sim       |
| \b            | _**Âncora**_              | Define um range de posição EXCLUINDO palavras que comecem ou terminem com \w  | sim       |
| \B            | _**Âncora**_              | Define um range de posição INCLUINDO palavras que comecem ou terminem com \w  | sim       |
| ^ minha_regex $       | _**Âncora**_              | Define um range, só trará resultados quando a Regex começar e terminar daquela maneira | sim       |


## Aulas

- [Aula 1. Começando com Regex](aulas/1/comecando-com-regex.md)
- [Aula 2. Classes de Caracter](aulas/2/classes-de-caracter.md)
- [Aula 3. Âncoras](aulas/3/ancoras.md)
- [Aula 3. Trabalhando com GRUPOS](aulas/4/grupos.md)

