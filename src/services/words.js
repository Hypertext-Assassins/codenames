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

// initialize arr of objs with word and count
let wordsDBCount = [];

//create arr of objs with {word: "baseball", count: 1} to avoid repeats
const resetWordsDB = () => {
    let wordsDBCount = [];
    wordsDB.forEach((el) => {
        wordsDBCount.push({  
            word: el,
            count: 1
        })
    })
    return wordsDBCount;
}

const getCards = (color, number) => {
    let cardsArr = []
    while (cardsArr.length<number){
        let rndIdx = Math.floor(Math.random()* wordsDBCount.length);
        let wordObj = wordsDBCount[rndIdx]
        if (wordObj.count>0){
            let card = {
                id: Number,
                word: wordsDB[rndIdx],
                color: color
            }
            wordObj.count--; //subtract count to avoid repeat words
            cardsArr.push(card);
        }
    }
    return cardsArr;
}

const buildBoard = () => {
    let redCards = getCards("red.500", 8)
    let blueCards = getCards("blue.400", 9) // 9 blue cards means blue must always go first
    let whiteCards = getCards("white", 7)
    let blackCard = getCards("black", 1)
    let boardArr = [...redCards, ...blueCards, ...whiteCards, ...blackCard]
    return boardArr;
}

const shuffleBoard = (boardArr) => {
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

// generateBoard function is the only function exported. It's the culmination of all functions on words.js
export const generateBoard = () => {
    wordsDBCount = resetWordsDB();
    let boardArr = buildBoard();
    return shuffleBoard(boardArr);
}



