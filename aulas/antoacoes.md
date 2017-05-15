# Anotações Pessoais

- O `/g` do Regex do Javascript significa `GLOBAL`, ou seja, ele informa que desejamos pegar TODAS as ocorrencias que correspondem ao padrão, não só a primeira.

- No exemplo abaixo, uma opção de pegar todas as tags `<code>`, podemos usar a expressão `<\?code>`, onde indica que pode ou não ter uma barra na tag que queremos.
```
No <code>for</code>, o valor de <code>i</code> começa de zero e é incrementado a cada volta enquanto <code>i < 10</code>, portando o bloco de código do for é executado 10 vezes.
```

- Caracteres especiais não são contabilizados por classes de caracteres como `[A-Za-z]`, assim, precisamos adiciona-los manualmente: `[A-Za-zçóôáã]`