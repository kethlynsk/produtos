const prompt = require("prompt-sync")()

const produtos = []

const validarIndice = (indice) => indice >= 0 && indice < produtos.length;

const modelo = () => {
    const nome = prompt("Qual o nome do produto? ")
    const valor = +prompt("Qual o valor do produto? ")

    if ( nome !== "" && !isNaN(valor)){
        return{
            nome,
            valor
        }
    }else {
        console.log("Valor inválido!")
        return undefined
    }
}

const criar = () => {
    const produto = modelo()

    if(produto !== undefined){
        produtos.push(produto)
        console.log("Cadastrado!")
    }
}

const listar = () => {
    if(produtos.length === 0){
        console.log("Nenhum produto encontrado!")
        return false
    }else {
    produtos.forEach((produto, indice) => {
      console.log(  `
      ${indice}
        Nome: ${produto.nome}
        Valor: ${produto.valor}`)
    })
return true}
}

const atualizar = () => {
    listar();
    indice = prompt("Qual indice você deseja atualizar? ")
    if(!validarIndice(indice)){
        console.log("Indice inválido!")
    return
    }

    const produto = modelo(indice)
    
    if(produto !== undefined){
        produtos[indice] = produto
        console.log("Atualizado!")
    }
    else{
        console.log("Falha na atualização")
    }
}

const deletar = () => {
    listar();

    let indice = prompt("Qual indice você deseja remover?")

    if(validarIndice(indice)){
        produtos.splice(indice, 1)
        console.log("Removido com sucesso!")
    }else {
        console.log("Indice inválido!")

    }

}

module.exports = {
    criar,
    listar,
    atualizar,
    deletar
}