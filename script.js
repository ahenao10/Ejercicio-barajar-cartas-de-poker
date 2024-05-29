const numbersDeck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const symbolsDeck = ['♥', '♦️', '♠', '♣']
let numPlayers
let numCards
let isValidCaracter = false

const fullDeckGenerate = (numbers, symbols) => {
    const fullDeckGenerated = []
    for (number of numbers) {
        for (symbol of symbols) {
            fullDeckGenerated.push(number + symbol);
        }
    }
    return fullDeckGenerated;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const k = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j], deck[k]] = [deck[k], deck[j], deck[i]];
    }
    return deck;
}

const fulldeck = fullDeckGenerate(numbersDeck, symbolsDeck);

function play() {

    while (!isValidCaracter) {

        numPlayers = parseInt(prompt('Escriba el numero de jugadores'))
        numCards = parseInt(prompt('Escriba el numero de cartas a repartir por jugador'))

        if ((numPlayers * numCards) > (fulldeck.length)) {
            alert('No hay suficientes cartas para repartir entre los jugadores');
        } else if (isNaN(numPlayers) || isNaN(numCards)) {
            alert('Ingrese valores válidos para comenzar el juego')
        } else {
            isValidCaracter = true
            repartirCartas(numPlayers, numCards)
        }
    }
}

function repartirCartas(players, cards) {
    const shuffledDeck = shuffleDeck(fulldeck);
    let listPlayers = {};
    for (let i = 0; i < players; i++) {
        let cartas = shuffledDeck.splice(-cards, cards)
        listPlayers[`Jugador${i + 1}`] = cartas
    }

    let message = 'Las cartas se distribuyen de la siguiente manera: \n'

    for (player in listPlayers) {
        message += `${player}: ${listPlayers[player].join(', ')}\n`
    }

    alert(message);
}

play()