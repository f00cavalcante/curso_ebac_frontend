# O Módulo 04 deste curso de formação

_"Profissão: Engenheiro Front-End"_ aborda sobre os
conceitos da linguagem em cascata CSS, e a
aplicação/utilização dos estilos nos elementos (tags)
HTML.

No conteúdo desta página, estarei efetuando um breve resumo
do que foi visto neste conteúdo, resumir a utilização dos
principais conceitos.

## Introdução CSS - Super síntese 🙃

CSS, apesar de não ser uma linguagem de programação, é uma linguagem em cascata utilizada para gerar estilos às páginas HTML por meio dos seus elementos (tags) declarados.
O processo de estilização ocorre com a definição de cada elemento como blocos, e estes, por sua vez, recebem as customizações, e aplicações de processos hierárquico, e também, herança (pai e filho) para gerar a replicação de todas as customizações desejadas para determinada página HTML.

Atualmente, com o CSS3, é possível utilizar pseudo-classes, importação de conteúdos, declarações de variáveis, identificação de IDs e classes HTML, para um melhor direcionamento dos estilos a serem aplicados.

A sintaxe do CSS, corresponde a identificação do elemento/ID/classe, seguida das propriedades a serem modificadas no bloco da tag HTML. Exemplo:

```css
elemento {
     color: blue;
}
```

Neste exemplo, está sendo selecionado o elemento, e modificado sua cor para azul.

Um ponto importante seria que as propriedades de estilos também podem ser aplicadas pelos próprios elementos HTML através da palavra reservada _"style"_ e suas modificações inseridas entre aspas, conforme uma string, por assim dizer. Exemplo:

```html
<p style="color: blue;">Conteúdo do parágrafo</p>
```

## Prorpriedades

O processo para determinar a estilização em determinado elemento HTML, e as ações a ele envolvido sempre ocorrerão por meio das propriedades, e sua sintaxe será:

-    especificar o elemento
     -    que poderá ser por meio:
          -    do seu nome (palavra reservada)
          -    classe
          -    ID
-    determinar a propriedade a ser alterada
-    determinar seu valor

Neste caso, a alteração da cor do texto em determinado elemento, será da seguinte forma:

```css
a {
     color: red;
}
```

## Pseudo-classe

Através do CSS também é possível efetuar estilizações a partir de ações praticadas nos elementos criados no arquivo HTML. Isto, ocorre por meio das pseudo-classes. Neste processo, seria possível determinar qual ação deverá ocorrer ao passar o mouse sobre determinada tag contida na página, e afins.
Neste exemplo descrito, seria possível estilizar a alteração de cor em determinado link, representado pelo elemento `<a>` ao receber a interação do mouse.

```css
a:hover {
     color: blue;
}
```

## Exercício

No conteúdo deste módulo, a proposta foi a aplicação de estilizações de artigos, por meio do elemento `<article>` criando blocos como uma página de notícias.
O exercício proposto seria efetuar a criação e estilização de mais dois artigos para aplicação das propriedades CSS.

Para visualizar o resultado, poderá acessar este link.

Nesta execução foi criado uma branch com o nome TAL, e estilizado estes dois artigos, e publicar no github. Abaixo, os comandos git utilizados.
