# Curso Regex Alura

Repositório com foco em fazer anotações e resenhas sobre o [Curso online de Expressões regulares: Capturando textos de forma mágica](https://www.alura.com.br/curso-online-expressoes-regulares)

> [PROJETO ONLINE](https://studentraul.github.io/regex/)

## Anotações pessoais
[Rascunhos e ideias](aulas/anotacoes.md)

## Lista com as expressões

| caracter  | Tipo                      | Significado                                                                 | Metachar  |
| :---:     | ---                       | ---                                                                         | :---:     | 
| d         | _**Classe de caracter**_  | Dígitos de 0-9                                                              | Não       |
| w         | _**Classe de caracter**_  | Alfanumérico, ou seja, [A-Za-z0-9]                                                              | Não       |
| .         | _**Classe de caracter**_  | Qualquer caracter                                                           | Sim       |
| {n}       | _**Quantifier**_          | O caracter pode aparecer exatamente `n` vezes                               | Sim       |
| {n,}      | _**Quantifier**_          | O caracter pode aparecer `n ou mais` vezes                                  | Sim       |
| {n,m}     | _**Quantifier**_          | O caracter pode aparecer `n até m` vezes                                    | Sim       |
| +         | _**Quantifier**_          | O caracter pode aparecer `1 ou mais` vezes.                                 | Sim       |
| *         | _**Quantifier**_          | O caracter pode aparecer `0 ou mais` vezes.                                 | Sim       |
| ?         | _**Quantifier**_          | O caracter pode aparecer `0 ou 1` vez                                       | Sim       |
| [ ]       | _**Classe de caracter**_  | Define um conjunto de caracteres que PODEM aparecer                         | sim       |
| s         | _**Classe de caracter**_  | O caracter pode qualquer espaço em branco (tab, space, etc)                 | sim       |
| ^         | _**Classe de caracter**_  | Nega uma expressão ou valor, ou seja, `^[A-Z] - Pegue tudo que não for A-Z` | sim       |

## Aula 1


