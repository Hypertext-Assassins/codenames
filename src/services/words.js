const wordsDB = [
    "baseball",
    "complaint",
    "attention",
    "efficiency",
    "dad",
    "profession",
    "priority",
    "office",
    "problem",
    "birthday",
    "tension",
    "mood",
    "writing",
    "virus",
    "skill",
    "camera",
    "setting",
    "airport",
    "speech",
    "security",
    "policy",
    "historian",
    "presentation",
    "topic",
    "possibility",
    "ability",
    "lake",
    "queen",
    "map",
    "chapter",
    "economics",
    "committee",
    "computer",
    "truth",
    "penalty",
    "secretary",
    "region",
    "lady",
    "sister",
    "agency",
    "teacher",
    "quality",
    "distribution",
    "proposal",
    "highway",
    "sympathy",
    "chocolate",
    "inspection",
    "politics",
    "education",
]

const getCards = (color, number) => {
    let cardsArr = []
    for (let i=0; i<number; i++){
        let wordNum = Math.floor(Math.random()* wordsDB.length);
        let card = {
            id: Number,
            word: wordsDB[wordNum],
            color: color
        }
        wordsDB.splice(wordNum,1)  //to avoid repeat cards, remove word from wordsDB arrary
        cardsArr.push(card);
    }
    return cardsArr;
}


export const shuffleBoard = () => {
    let redCards = getCards("red", 8)
    let blueCards = getCards("blue", 9)
    let whiteCards = getCards("white", 7)
    let blackCard = getCards("black", 1)
    let boardArr = [...redCards, ...blueCards, ...whiteCards, ...blackCard]

    //shuffle board
    for (let i=boardArr.length-1; i>0; i--){
        let rndIdx = Math.floor(Math.random()*(i+1));
        let temp = boardArr[i];
        boardArr[i] = boardArr[rndIdx];
        boardArr[rndIdx] = temp;

        //assign IDs to each word obj based on position in shuffled array
        boardArr[i].id = i+1;
        boardArr[rndIdx].id = rndIdx+1;
    }
    return boardArr;
}

