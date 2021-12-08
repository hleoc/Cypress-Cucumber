# language: pt

Funcionalidade: Login
Para experimentar o uso do cypress vou construir
 testes para a página de login da Americanas

Cenário: Realizar login na aplicação sem sucesso​
    Dado que estou na página de login
    Quando realizo o login do usuario sem sucesso
    Então login do usuario não é realizado