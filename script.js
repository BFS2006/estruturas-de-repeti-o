function atv1() {
    var resultado = document.getElementById("resultadoAtv1")
    var textoOriginal = "Null"
    var soma = 0
    for (var i=0; i < 3; i++) {
        var pergunta = prompt("Insira um numero")
        if(isNaN(pergunta) || pergunta == "") {
            alert(`isso "${pergunta}" não é um numero`)
            return
        }else{
            pergunta = parseInt(pergunta)
            soma += pergunta
        }
    }
    resultado.innerHTML = `A soma é ${soma}`
    setTimeout(function() {
        resultado.innerHTML = textoOriginal
    }, 4000)
}
function atv2() {
    var resultado = document.getElementById("resultadoAtv2")
    var textoOriginal = "Null"
    var soma = 0

    for(var i = 0; i < 4; i++) {
        var pergunta = prompt(`Insira a ${i+1}° nota`)
        if(isNaN(pergunta) || pergunta == "") {
            alert(`isso "${pergunta}" não é um numero`)
            return
        }else{
            pergunta = parseInt(pergunta)
            soma += pergunta
        }
    }
    console.log(`O resultado é ${soma}`)
    resultado.innerHTML = `O resultado é ${soma}`
    setTimeout(function() {
        resultado.innerHTML = textoOriginal
    }, 4000)
}
function atv3() {
    var resultado = document.getElementById("resultadoAtv3")
    var textoOriginal = "Null"
    console.log("palasdds")
    for(i = ""; i !== "joão";) {
        i = prompt("Insira joão")
        if(i !== "joão") {
            alert("insira joão")
        }else{
            resultado.innerHTML = "você inseriu joão"
        }
        setTimeout(function() {
            resultado.innerHTML = textoOriginal
        }, 4000)
    }
}
function atv4() {
    var resultado = document.getElementById("resultadoAtv4")
    var textoOriginal = "Null"
    var quantidade = 0
    
    resultado.innerHTML = "espere um pouco..."

    for(i = 35; i < 98111; i++) {
        if(i % 2 != 0) {
            // console.log("numero impar")
        }else{
            quantidade = quantidade + 1
            // console.log(`numero par ${quantidade}`)
        }
        // console.log(`${quantidade}`)
    }
    resultado.style.fontSize = "20px"
    resultado.innerHTML = `o total de numeros pares é <br> ${quantidade}`
    setTimeout(function() {
        resultado.style.fontSize = "35px"
        resultado.innerHTML = textoOriginal
    }, 4000)
}
function atv5() {
    var resultado = document.getElementById("resultadoAtv5")
    var textoOriginal = "Null"
    var soma = 0

    for(i = 0; i <= 5000; i += 2) {
        soma += i
    }
    console.log(soma)
    resultado.style.fontSize = "20px"
    resultado.innerHTML = `A soma dos numeros ímpares é ${soma}`
    setTimeout(function() {
        resultado.style.fontSize = "35px"
        resultado.innerHTML = textoOriginal
    }, 4000)
}
function atv6() {
    var resultado = document.getElementById("resultadoAtv6")
    var textoOriginal = "Null"

    var multiplicação = 1

    var numero = parseInt(prompt("Insira um numero"))
    if(isNaN(numero)) {
        alert(`isso "${numero}" não é um numero`)
        return
    }else{
        for(i = 1; i <= numero; i++) {
            multiplicação *= i
        }
        resultado.style.fontSize = "20px"
        resultado.innerHTML = `o fatorial é ${multiplicação}`
    }
    setTimeout(function() {
        resultado.style.fontSize = "35px"
        resultado.innerHTML = textoOriginal
    }, 4000)
}