let frutas = ['laranja', 'maçã', 'banana', 'pera', 'uva', 'mamão']

//exibir vetor
console.log(frutas)

// Tirar ultimo elemento do Vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

// Tirar primeiro elemento
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Removendo de posições intermediárias
// splice()
// 1º parâmetro = posição que será removida( lembre-se que a contagem começa em 0)
// 2º parâmetro = quantidade de elementos que serão removidos
let terceiraFruta = frutas.splice(2, 1)

console.log(frutas)
console.log(terceiraFruta)

// Inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

// Inserir um elemento no início do vetor
frutas.unshift('amora')

console.log(frutas)

// Inseir em posição intermediaria
// splice() para inserção
// 1º parâmetro: a posição onde ocorrerá inserção
// 2º parâmetro: quantos elementos a serem inseridos

// Inserindo na posição 4
frutas.splice(3, 0, 'pêssego')
console.log(frutas)

// Inserindo duas frutas na 3º posição
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

// Substituindo 6º fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)