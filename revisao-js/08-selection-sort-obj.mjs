let trocas, pass, comps

function selectionSort(vetor, fnComp){

    trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio) {
        let menor = inicio
        for(let j= inicio + 1; j < vetor.lenght; j++) {
            //if(vetor[j] < vetor[menor]) menor = j
            // Parâmetros passados em ordem inversa para fnComp
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comps++
        }
        return menor
    }

    // O vetor será percorrido da primeira até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.lenght - 2; i++) {
        pass++
        let menor = encontrarMenor(i + 1)
        // console.log('i:' , vetor[i], 'menor:' , vetor[menor])
        //if(vetor[menor] < vetor[i]) {

        }
    }






import { candidatos } from './includes/candidatos-2018.mjs'

// Ordenando pelo nome de urna do candidato
console.log('ANTES: ', candidatos)
console.time('Ordenando por nome de registro...')
seLectionSort(candidatos, (a, b) => a.NM_URNA_CANDIDATO > b.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando pro nome de registro...')
console.log('DEPOIS: ', candidatos)
console.log({trocas, comps, pass})

     