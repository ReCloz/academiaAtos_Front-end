document.getElementById('play').onclick = startGame

document.getElementById('ranks').onclick = showRanking

var ranked = []

alert('Este é um jogo de cores. Clique na cor utilizada no nome apresentado para avançar no jogo.')

idCount = 0


function showRanking() {

    ranked.sort(function(a,b){return b.nivel - a.nivel})

    mensagemRank = ranked.map((rank) => {
        return rank.nome + " " + rank.nivel;
      }).join("\n"); 

    alert( mensagemRank )

}

ranking = true

ranks()

function ranks() {
    if (ranking) {
        document.getElementById('ranks').style.visibility = 'visible';
    } else {
        document.getElementById('ranks').style.visibility = 'hidden';
    }
}

function startGame() {
    cores = ["orange", "blue", "red", "yellow", "grey", "purple", "brown", "green", "white"]

    levelCount = 0
    gameTimer = true
    ranking = false
    playGame()
    ranks()

}

levelCount = 1
level = 0

function playGame() {
    count = 0
    randomCores()
    respostaText()
    tempo()
    level = Math.floor(1 + levelCount / 10)

    document.getElementById('nivel').innerText = 'Nivel ' + level


}

function respostaText() {

    randomCor = Math.floor(Math.random() * (9))

    //Não consegui funcionar utilizando uma variavel como usei no for em randomCores()
    switch (randomCor) {
        case 0:
            document.getElementById('resposta').innerText = 'laranja'
            break
        case 1:
            document.getElementById('resposta').innerText = 'azul'
            break
        case 2:
            document.getElementById('resposta').innerText = 'vermelho'
            break
        case 3:
            document.getElementById('resposta').innerText = 'amarelo'
            break
        case 4:
            document.getElementById('resposta').innerText = 'cinza'
            break
        case 5:
            document.getElementById('resposta').innerText = 'roxo'
            break
        case 6:
            document.getElementById('resposta').innerText = 'marrom'
            break
        case 7:
            document.getElementById('resposta').innerText = 'verde'
            break
        case 8:
            document.getElementById('resposta').innerText = 'branco'
            break


    }

}

function randomCores() {
    cores = ["orange", "blue", "red", "yellow", "grey", "purple", "brown", "green", "white"]
    newCores = cores
    numCor = 1
    numC = 0
    corC = Math.floor(Math.random() * (8))
    corC = corC + 1
    levelCount = levelCount + 1
    for (i = 0; i < 9; i++) {

        ncell = "cell" + numCor

        num = Math.floor(Math.random() * (10 - numCor))

        document.getElementById(ncell).style.backgroundColor = newCores[num]
        numCor = numCor + 1

        document.getElementById(ncell).onclick = loseGame

        if (corC == i) {
            document.getElementById(ncell).onclick = playGame
            numC = newCores[num]
            console.log(numC)
        }

        newCores.splice(num, 1)

    }
    newCores = cores

    //Não consegui funcionar utilizando uma variavel no lugar do Id como usei no for acima
    switch (numC) {
        case 'orange':
            document.getElementById('resposta').style.color = 'orange'
            break
        case 'blue':
            document.getElementById('resposta').style.color = 'blue'
            break
        case 'red':
            document.getElementById('resposta').style.color = 'red'
            break
        case 'yellow':
            document.getElementById('resposta').style.color = 'yellow'
            break
        case 'grey':
            document.getElementById('resposta').style.color = 'grey'
            break
        case 'purple':
            document.getElementById('resposta').style.color = 'purple'
            break
        case 'brown':
            document.getElementById('resposta').style.color = 'brown'
            break
        case 'green':
            document.getElementById('resposta').style.color = 'green'
            break
        case 'white':
            document.getElementById('resposta').style.color = 'white'
            break
    }

}

timer = 0
count = 0

function tempo() {
    timer = 0

    if (gameTimer) {
        count++
        timer = count/400
        limite = 3
        zero = (limite - timer)
        if (level == 2) {
            limite = 2
        }
        if (level == 3) {
            limite = 2
        }
        if (level == 4) {
            limite == 1.7
        }
        if (level == 5) {
            limite == 1.5
        }
        if (level >= 6) {
            limite = 1
        }
        if (zero == 0) {

            document.getElementById('timerdisplay').innerText = zero
            count = 0
            stopFunction()
            loseGame()
        }
        document.getElementById('timerdisplay').innerText = zero

    }

    setTimeout(tempo, limite)

}

function stopFunction(){
    clearInterval(tempo())
}


function loseGame() {
    ranking = true
    gameTimer = false
    wipeOut = 1
    for (j = 0; j < 9; j++) {
        jcell = 'cell' + wipeOut
        document.getElementById(jcell).style.backgroundColor = 'white'
        document.getElementById(jcell).onclick = nada

        wipeOut = wipeOut + 1
    }
    document.getElementById('timerdisplay').innerText = '0'
    document.getElementById('resposta').style.color = 'white'
    ranks()
    inserirDados()


}

function inserirDados() {
    let person = prompt("Insira seu nome para aderir ao ranking ", " ")
    if (person == null || person == "" || person == " ") {
        nada()
    } else {
        let dataUser = {
            "nome":person,
            "nivel":levelCount
        }
        console.log(ranked)
        ranked.push(dataUser)

        idCount = idCount + 1

    }
}



function nada() { }

