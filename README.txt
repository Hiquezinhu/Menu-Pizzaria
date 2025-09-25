Sistema de Pizzaria (Node.js + TypeScript)

Este projeto é um sistema de gerenciamento de pizzaria via terminal.
Ele permite realizar cadastros de clientes, emissão de notas, geração de relatórios, além de simular pedidos de pizzas e bebidas, salvando todas as informações em arquivos .txt.

Funcionalidades
Menu Principal

1 - Cadastro → Cadastrar clientes.

2 - Emissão → Emitir notas fiscais.

3 - Relatórios → Gerar relatórios de vendas (dia/mês).

4 - Pedidos → Realizar pedidos (pizzas e bebidas).

5 - Sair → Finalizar o programa.

-Cadastro

Solicita nome, CPF, telefone e endereço do cliente.

Os dados são salvos em saida.txt.

Emissão

Permite escrever e salvar notas fiscais.

As notas ficam registradas em emissao.txt.

-Relatórios

Pizzas vendidas no dia

Pizzas vendidas no mês

Relatórios são salvos em relatorio.txt.

-Pedidos

Adicionar pizzas (Mussarela, Calabresa, Portuguesa, Pepperoni, Frango c/ Catupiry).

Adicionar refrigerantes (Coca-Cola, Guaraná, Fanta, Água com gás).

Visualizar sacola de compras.

Finalizar pedido → salva em pagamento.txt.

-Estrutura de Arquivos Gerados

saida.txt → Cadastros de clientes.

emissao.txt → Notas fiscais.

relatorio.txt → Relatórios de vendas.

pagamento.txt → Pedidos finalizados.

-Tecnologias Utilizadas

Node.js (Execução via terminal)

TypeScript

Módulo fs → Manipulação de arquivos.

Módulo readline → Entrada de dados do usuário.

-Como Executar

Instale as dependências do TypeScript (se ainda não tiver):

npm install -g typescript ts-node


Execute o programa com:

ts-node index.ts

