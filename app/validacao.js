function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <div class = "container" style = "
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        ">
        <div class="bolhas" style = "
            position: absolute;
            display: flex;
    
        ">
        <span style="--i:22"></span>
        <span style="--i:9"></span>
        <span style="--i:24"></span>
        <span style="--i:18"></span>
        <span style="--i:28"></span>
        <span style="--i:26"></span>
        <span style="--i:18"></span>
        <span style="--i:14"></span>
        <span style="--i:19"></span>
        <span style="--i:30"></span>
        <span style="--i:13"></span>
        <span style="--i:25"></span>
        <span style="--i:5"></span>
        <span style="--i:26"></span>
        <span style="--i:17"></span>
        <span style="--i:8"></span>
        <span style="--i:22"></span>
        <span style="--i:9"></span>
        <span style="--i:24"></span>
        <span style="--i:18"></span>
        <span style="--i:28"></span>
        <span style="--i:26"></span>
        <span style="--i:18"></span>
        <span style="--i:14"></span>
        <span style="--i:19"></span>
        <span style="--i:30"></span>
        <span style="--i:13"></span>
        <span style="--i:25"></span>
        <span style="--i:5"></span>
        <span style="--i:26"></span>
        <span style="--i:17"></span>
        <span style="--i:10"></span>
        <span style="--i:22"></span>
        <span style="--i:9"></span>
        <span style="--i:17"></span>
        <span style="--i:24"></span>
        <span style="--i:28"></span>
        <span style="--i:26"></span>
        <span style="--i:18"></span>
        <span style="--i:14"></span>
        <span style="--i:19"></span>
        <span style="--i:30"></span>
        <span style="--i:13"></span>
        <span style="--i:25"></span>
        <span style="--i:9"></span>
        <span style="--i:26"></span>
        <span style="--i:17"></span>
        <span style="--i:10"></span>
        <span style="--i:25"></span>
        <span style="--i:26"></span>
        <span style="--i:9"></span>
        <span style="--i:28"></span>
    </div>
            <h2 style = "margin-top:5em;">Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            </div>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
 
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == `jogar-novamente`) {
        window.location.reload()
    }
})