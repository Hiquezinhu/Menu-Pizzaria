"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const saidaTexto = "saida.txt";
const saidaEmissao = "emissao.txt";
const saidaRelatorio = "relatorio.txt";
const saidaPagamento = "pagamento.txt";
const sacola = [];
// ========== MENU PRINCIPAL ==========
function menuPrincipal() {
    console.log("\n===| Menu Pizzaria |===");
    console.log("1 - Cadastro");
    console.log("2 - Emissão");
    console.log("3 - Relatórios");
    console.log("4 - Pedidos");
    console.log("5 - Sair");
    rl.question("Digite sua opção: ", (opcao) => {
        switch (opcao.trim()) {
            case "1":
                menuCadastro();
                break;
            case "2":
                menuEmissao();
                break;
            case "3":
                menuRelatorios();
                break;
            case "4":
                menuPedidos();
                break;
            case "5":
                console.log("Programa Finalizado.");
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
                menuPrincipal();
        }
    });
}
// ========== MENU CADASTRO ==========
function menuCadastro() {
    console.log("\n===| Menu Cadastro |===");
    console.log("1 - Cadastrar Cliente");
    console.log("2 - Voltar");
    rl.question("Digite sua opção: ", (opcao) => {
        switch (opcao.trim()) {
            case "1":
                rl.question("Nome do cliente: ", (nome) => {
                    rl.question("CPF: ", (cpf) => {
                        rl.question("Telefone: ", (telefone) => {
                            rl.question("Endereço: ", (endereco) => {
                                const dados = `Nome: ${nome}\nCPF: ${cpf}\nTelefone: ${telefone}\nEndereço: ${endereco}\n|===============|==============|\n`;
                                fs.writeFileSync(saidaTexto, dados, { flag: "a" });
                                console.log("Cliente cadastrado com sucesso.");
                                menuPrincipal();
                            });
                        });
                    });
                });
                break;
            case "2":
                menuPrincipal();
                break;
            default:
                console.log("Opção inválida.");
                menuCadastro();
        }
    });
}
// ========== MENU EMISSÃO ==========
function menuEmissao() {
    console.log("\n===| Menu Emissão |===");
    console.log("1 - Emitir Nota Fiscal");
    console.log("2 - Voltar");
    rl.question("Digite sua opção: ", (opcao) => {
        switch (opcao.trim()) {
            case "1":
                rl.question("Escreva a nota fiscal: ", (resposta) => {
                    const nota = `${resposta}\n|===============|==============|\n`;
                    fs.writeFileSync(saidaEmissao, nota, { flag: "a" });
                    console.log(`Nota salva em ${saidaEmissao}`);
                    menuPrincipal();
                });
                break;
            case "2":
                menuPrincipal();
                break;
            default:
                console.log("Opção inválida.");
                menuEmissao();
        }
    });
}
// ========== MENU RELATÓRIOS ==========
function menuRelatorios() {
    console.log("\n===| Menu Relatórios |===");
    console.log("1 - Pizzas Vendidas Hoje");
    console.log("2 - Pizzas Vendidas no Mês");
    console.log("3 - Voltar");
    rl.question("Digite sua opção: ", (opcao) => {
        switch (opcao.trim()) {
            case "1":
                rl.question("Quantidade de pizzas vendidas hoje: ", (quantidade) => {
                    const linha = `Hoje: ${quantidade}\n|===============|==============|\n`;
                    fs.writeFileSync(saidaRelatorio, linha, { flag: "a" });
                    console.log("Relatório salvo.");
                    menuPrincipal();
                });
                break;
            case "2":
                rl.question("Quantidade de pizzas vendidas no mês: ", (quantidade) => {
                    const linha = `Mês: ${quantidade}\n|===============|==============|\n`;
                    fs.writeFileSync(saidaRelatorio, linha, { flag: "a" });
                    console.log("Relatório salvo.");
                    menuPrincipal();
                });
                break;
            case "3":
                menuPrincipal();
                break;
            default:
                console.log("Opção inválida.");
                menuRelatorios();
        }
    });
}
// ========== MENU PEDIDOS ==========
function menuPedidos() {
    console.log("\n===| Menu Pedidos |===");
    console.log("1 - Adicionar Pizza");
    console.log("2 - Adicionar Refrigerante");
    console.log("3 - Visualizar Sacola");
    console.log("4 - Finalizar Pedido");
    console.log("5 - Voltar");
    rl.question("Digite sua opção: ", (opcao) => {
        switch (opcao.trim()) {
            case "1":
                menuPizzas();
                break;
            case "2":
                menuRefrigerantes();
                break;
            case "3":
                visualizarSacola();
                break;
            case "4":
                finalizarPedido();
                break;
            case "5":
                menuPrincipal();
                break;
            default:
                console.log("Opção inválida.");
                menuPedidos();
        }
    });
}
// ========== SUBMENU PIZZAS ==========
function menuPizzas() {
    const pizzas = {
        "1": { nome: "Mussarela", preco: 50 },
        "2": { nome: "Calabresa", preco: 30 },
        "3": { nome: "Portuguesa", preco: 35 },
        "4": { nome: "Pepperoni", preco: 45 },
        "5": { nome: "Frango com Catupiry", preco: 60 },
    };
    console.log("\n===| Pizzas |===");
    for (const [key, value] of Object.entries(pizzas)) {
        console.log(`${key} - ${value.nome} | ${value.preco}$`);
    }
    console.log("6 - Cancelar");
    rl.question("Escolha sua pizza: ", (opcao) => {
        if (opcao === "6") {
            menuPedidos();
        }
        else if (pizzas[opcao]) {
            const pizza = pizzas[opcao];
            sacola.push({ item: `Pizza: ${pizza.nome}`, preco: pizza.preco });
            console.log(`${pizza.nome} adicionada à sacola.`);
            menuPedidos();
        }
        else {
            console.log("Opção inválida.");
            menuPizzas();
        }
    });
}
// ========== SUBMENU REFRIGERANTES ==========
function menuRefrigerantes() {
    const bebidas = {
        "1": { nome: "Coca-Cola", preco: 10 },
        "2": { nome: "Guaraná", preco: 6 },
        "3": { nome: "Fanta Laranja", preco: 9 },
        "4": { nome: "Água com gás", preco: 7 },
    };
    console.log("\n===| Refrigerantes |===");
    for (const [key, value] of Object.entries(bebidas)) {
        console.log(`${key} - ${value.nome} | ${value.preco}$`);
    }
    console.log("5 - Cancelar");
    rl.question("Escolha sua bebida: ", (opcao) => {
        if (opcao === "5") {
            menuPedidos();
        }
        else if (bebidas[opcao]) {
            const bebida = bebidas[opcao];
            sacola.push({ item: `Refrigerante: ${bebida.nome}`, preco: bebida.preco });
            console.log(`${bebida.nome} adicionada à sacola.`);
            menuPedidos();
        }
        else {
            console.log("Opção inválida.");
            menuRefrigerantes();
        }
    });
}
// ========== SACOLA ==========
function visualizarSacola() {
    console.log("\n===| Sacola de Compras |===");
    if (sacola.length === 0) {
        console.log("Sacola vazia.");
    }
    else {
        sacola.forEach((item, index) => {
            console.log(`${index + 1}. ${item.item} - ${item.preco}$`);
        });
    }
    menuPedidos();
}
// ========== FINALIZAR PEDIDO ==========
function finalizarPedido() {
    if (sacola.length === 0) {
        console.log("Sua sacola está vazia. Adicione algo antes de finalizar.");
        menuPedidos();
        return;
    }
    const total = sacola.reduce((sum, item) => sum + item.preco, 0);
    console.log(`\nTotal do pedido: ${total}$`);
    rl.question("Possui cupom de desconto? (Digite ou pressione Enter): ", (cupom) => {
        let valorFinal = total;
        if (cupom.trim().toUpperCase() === "POPOVICIDA10") {
            valorFinal = total * 0.9;
            console.log("Cupom aplicado! 10% de desconto.");
        }
        console.log(`Valor a pagar: ${valorFinal}$`);
        console.log("\nMétodos de pagamento:");
        console.log("1 - Cartão");
        console.log("2 - Dinheiro");
        console.log("3 - PIX");
        rl.question("Escolha a forma de pagamento: ", (pagamento) => {
            let metodo = "";
            switch (pagamento) {
                case "1":
                    metodo = "Cartão";
                    break;
                case "2":
                    metodo = "Dinheiro";
                    break;
                case "3":
                    metodo = "PIX";
                    break;
                default:
                    console.log("Opção inválida, pagamento em Dinheiro.");
                    metodo = "Dinheiro";
            }
            const pedidoFinal = sacola.map((i) => `${i.item} - ${i.preco}$`).join("\n") +
                `\nTotal: ${total}$\nValor Final: ${valorFinal}$\nPagamento: ${metodo}\n|===============|==============|\n`;
            fs.writeFileSync(saidaPagamento, pedidoFinal, { flag: "a" });
            console.log("Pedido finalizado e salvo em pagamento.txt.");
            sacola.length = 0;
            menuPrincipal();
        });
    });
}
menuPrincipal();
