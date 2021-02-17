// Criação de um objeto vazio
let vazio1 = {} // Forma "moderna"
let vazio2 = new Object() // Forma "tradicional"

// Criação de objeto já com dados
let pessoa = {
    // Objetos organizam-se em pares de
    // propriedade : valor
    // Também chamados de 
    // atributo : valor
    nome: 'Orkutilson da Silva',
    dataNasc: '2009-01-29',
    sexo: 'M',
    ocupacao: 'Estudante',
    // Nomes de propriedades podem ter espaços e/ou acentos,
    // mas, nesse caso, precisam vir entre aspas.
    'cidade de origem': 'Franca/SP'
}

// Acessando uma propriedade
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
// Quando o nome da propriedade tem espaços ou acento, não é possível
// acessá-la pela sintaxe do ponto. Deve-se usar a sintaxe dos colchetes.
console.log(pessoa['cidade de origem'])

// A sintaxe dos colchetes SEMPRE funciona
console.log(pessoa.dataNasc) // Sintaxe do ponto
console.log(pessoa['dataNasc']) // Sintaxe dos colchetes

// A sintaxe dos colchetes é importante também quando o nome da propriedade
// está armazenada em uma variável
let prop = 'nome'
console.log(pessoa[prop])
prop = 'sexo'
console.log(pessoa[prop])
prop = 'cidade de origem'
console.log(pessoa[prop])

// Formas de exibição de um objeto inteiro no console
console.log(pessoa)
console.table(pessoa)

let veiculo = {} // O objeto inicia-se vazio
// Foi criada a propriedade Marca e colocado o  valor 'VolksWagen' dentro dela
veiculo.marca = 'Volkswagen'
veiculo.modelo = 'Variant'
veiculo.ano = 1974
// Propriedade com acento -> sintaxe dos colchetes
veiculo['combustível'] = 'gasolina'
veiculo.cor = 'azul'

console.log(veiculo)
console.table(veiculo)

// Listando todas as propriedades de um objeto
console.log('--------------------------------')

// for..in -> lista todas as propriedades de um objeto
// Variáveis:
// prop -> a variável que irá conter o nome de cada uma das propriedades
// do objeto (pode ser qualquer nome válido de variável)
// pessoa -> o objeto dp qual queremos listar as propriedades
for(let prop in pessoa) {
    console.log(prop)
}
console.log('---------------------')
for(let x in veiculo) {
    console.log(x)
}

// Listando propriedades e valores do objeto veiculo com for..in
for(let atrib in veiculo) {
    console.log(atrib + ' -> ' + veiculo[atrib])
}

// Objeto veículo antes da exclusão da propriedade
console.log('---------------')
console.table(veiculo)

// Apagando a propriedade de um veículo : delete
delete veiculo.ano

// Objeto veículo depois da exclusão da propriedade
console.log('---------------')
console.table(veiculo)

