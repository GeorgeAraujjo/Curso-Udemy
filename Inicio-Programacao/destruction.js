const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco: { 
        logradouro:'Rua ABC',
        numero: 1000

    }
}

const {nome,idade} = pessoa
console.log(nome, idade)

// O atributo destruction é usado no objeto para retirar somente o que você quer.