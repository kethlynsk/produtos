const prompt = require("prompt-sync")();

const {criar, listar, atualizar, deletar} = require("./modulos.js")


while(true){
console.log(`
1. CRIAR
2. LISTAR
3. ATUALIZAR
4. DELETAR
5. SAIR
`)

let opcao = +prompt("Qual sua opção? ")

switch (opcao) {
    case 1:
        criar()
        break;
    case 2:
        listar()
        break;
    case 3:
        atualizar()
        break;
    case 4:
        deletar()
        break;
    case 5:
        process.exit()
    default:
        console.log("Opção inálida!")
        break;
}
}