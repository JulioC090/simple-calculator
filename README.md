<h1 align="center">Simple Calculator</h1>

![calc](https://user-images.githubusercontent.com/64113858/230753003-6dd8f23d-4e76-4799-a9a6-5d2c69ae337f.PNG)

Uma calculadora capaz de executar operações básicas como: adição, subtração, multiplicação e divisão. 
Essas operações podem ser expressas em uma expressão numérica (parênteses inclusos), que respeita a seguinte ordem: 
primeiro será realizado o que estiver dentro de parênteses, depois multiplicação e divisão, depois adição e subtração, 
quando não existir diferença de prioridade, a leitura é feita da esquerda para a direita. 

Exemplo: 1 + 2 * 3 = 1 + 6 = 7

Demo: https://julioc090.github.io/simple-calculator/

## Requisitos

- [ ]  O usuário deve conseguir inserir números para criar expressões
    - O usuário pode clicar nos botões
    - O usuário pode digitar os números
- [ ]  O usuário deve conseguir calcular essa expressão
    - Clicando no botão “=”
    - Pressionando a tecla “enter”
- [ ]  O usuário deve conseguir limpar a expressão
    - Clicando no botão “C”
- [ ]  O usuário deve conseguir excluir o caractere a esquerda do cursor da expressão
    - Clicando no botão “<[x]”
    - Pressionando a tecla “backspace”
- [ ]  O usuário deve conseguir visualizar o histórico de expressões
    - Clicando no botão “histórico”
- [ ]  O usuário deve conseguir inverter o valor de um número
    - Clicando no botão “+/-”
- [ ]  O usuário deve conseguir calcular a porcentagem de um número. Exemplo: 50%2 = 1
    - Clicando no botão “%”
    - Pressionando a tecla “%”
- [ ]  O usuário deve conseguir adicionar parênteses
    - Parênteses aberto “(”, é posicionado quando, não existem parênteses abertos antes de um número.
    - Parênteses fechado “)”, é posicionado quando, existem parênteses abertos antes de um número.
- [ ]  A calculadora deve fazer o tratamento de erros
    - Divisão por zero
    - Adicionar um operador antes de um número
    - Números grandes
- [ ]  A calculadora deve possuir um cursor virtual, permitindo o usuário inserir números onde quiser
    - Esse cursor deve ir para a esquerda, quando pressionado “←”
    - Esse cursor deve ir para a direita, quando pressionado “→”
    - Quando não existir mais caracteres o cursor deve ficar a direita do último caractere
    - Quando o usuário clicar com o botão esquerdo do mouse em uma posição do display de expressão, o cursor deve mudar a sua posição para onde o usuário clicou

## Tecnologias

- HTML;
- CSS;

## Inspirações

[#boraCodar - Desafio 5](https://www.figma.com/community/file/1202607074523509182/#boraCodar---Desafio-5)

## Referências

[Conceitos básicos de Grid Layout - CSS | MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
