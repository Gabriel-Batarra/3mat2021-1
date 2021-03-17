let comps = 0, divisoes = 0, juncoes = 0 

    function mergeSort(vetor){
        
        function mesclar(vetEsq, vetDir) {
            let pEsq = 0, pDir = 0, vetRes = []
            while(pEsq < vetEsq.length && pDir < vetDir.length) {
                //if(vetEsq[pEsq] < vetDir[pDir]) {
                if(fnComp(vetDir))   
                    vetRes.push(vetEsq[pEsq])
                    pEsq++
                }
                else {
                    vetRes.push(vetDir[pDir])
                    pDir++
                }
                comps++
            }
            // Verificando qual lado houve sobra
            let sobra
            if(pEsq < pDir) sobra = vetEsq.slice(pEsq)   // Sobra à esquerda
            else sobra = vetDir.slice(pDir)              // Sobra à direita

            // O vetor retornado será formado pelo vetor resultado + sobra
            return [...vetRes, ...sobra]  // Concatenando os dois vetores
        }
        // Desmontando o vetor
        if(vetor.length > 1) { // Para desmontar, são necessários pelo menos 2 elementos
            let meio = Math.floor(vetor.length / 2)
            // slice(): fatia um vetor, desde a posição inicial até a posição indicada (exclusive)
            // até a posição final (exclusive - A ÚLTIMA POSIÇÃO NÃO ENTRA NA FATIA GERADA)
            let vetEsq = vetor.slice(0, meio)
            // Quando o segundo parâmetro de slice() é omitido, são incluidos todos os elementos
            // até o final
            let vetDir = vetor.slice(meio)

            console.log({vetEsq, vetDir})

            // Chamadas recursivas à própria função para continuar o processo de desmontagem
            vetEsq = mergeSort(vetEsq)
            vetDir = mergeSort(vetDir)

            let vetFinal = mesclar(vetEsq, vetDir)
            juncoes++

            console.log({vetFinal})

            return vetFinal
             
        }
        return vetor
    }

    let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

    comps = 0, divisoes = 0, juncoes = 0
    let numsOrd = mergeSort(nums)
    console.log(numsOrd)
    console.log({comps, divisoes, juncoes})

    import { nomes } from './includes/vetor-nomes.mjs'

    //console.log('Antes:', nomes)
    comps = 0, divisoes = 0, juncoes = 0
    console.time('Ordenando por nome de registro...')
    let candidatoOrd = mergeSort(candidatos, (a,b) => a.NM_URNA_CANDIDATO > b.NM_URNA_CANDIDATO)
    console.timeEnd('Ordenando por nome de registro...')
    let memoria = process.memoryUsage().heapUsed / 1024 / 1024
    console.log({comps, divisoes, juncoes, memoria})
    console.log('Depois:', nomesOrd)
