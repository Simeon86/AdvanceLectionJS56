window.addEventListener('DOMContentLoaded', () => {

    // const gameStatus = document.querySelector('.status');
    // const resetButton = document.querySelector('.reset');
    // const board = document.querySelectorAll('.game-cell');
    // const boardArray = Array.from(board);

    // // console.log(boardArray);

    // const xPlayer = 'X';
    // const oPlayer = 'O';

    // // playerTurn = true is X Player turn
    // // playerTurn = false is O Player turn

    // let playerTurn = true;
    // let gameRunning = true;

    // // Function to check current game status

    // function checkGame() {
    //     const topLeft = board[0].classList[1];
    //     const topMiddle = board[1].classList[1];
    //     const topRight = board[2].classList[1];

    //     const middleLeft = board[3].classList[1];
    //     const middleMiddle = board[4].classList[1];
    //     const middleRight = board[5].classList[1];

    //     const botLeft = board[6].classList[1];
    //     const botMiddle = board[7].classList[1];
    //     const botRight = board[8].classList[1];

    //     if(topLeft && topLeft === topMiddle && topLeft === topRight) {
    //         board[0].classList.add('won');
    //         board[1].classList.add('won');
    //         board[2].classList.add('won');
    //     }

    //     if(middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    //         board[3].classList.add('won');
    //         board[4].classList.add('won');
    //         board[5].classList.add('won');
    //     }

    //     if(botLeft && botLeft === botMiddle && botLeft === botRight) {
    //         board[6].classList.add('won');
    //         board[7].classList.add('won');
    //         board[8].classList.add('won');
    //     }

    //     if(topLeft && topLeft === middleLeft && topLeft === botLeft) {
    //         board[0].classList.add('won');
    //         board[3].classList.add('won');
    //         board[6].classList.add('won');
    //     }

    //     if(topMiddle && topMiddle === middleMiddle && topMiddle === botMiddle) {
    //         board[1].classList.add('won');
    //         board[4].classList.add('won');
    //         board[7].classList.add('won');
    //     }
        
    //     if(topRight && topRight === middleRight && topRight === botRight) {
    //         board[2].classList.add('won');
    //         board[5].classList.add('won');
    //         board[8].classList.add('won');
    //     }

    //     if(topLeft && topLeft === middleMiddle && topLeft === botRight) {
    //         board[0].classList.add('won');
    //         board[4].classList.add('won');
    //         board[8].classList.add('won');
    //     }

    //     if(topRight && topRight === middleMiddle && topRight === botLeft) {
    //         board[2].classList.add('won');
    //         board[4].classList.add('won');
    //         board[6].classList.add('won');
    //     }
    // }
    
    // // Function to reser the game to initial state

    // function resetGame() {
    //     playerTurn = true;
    //     gameStatus.innerHTML = `${xPlayer} turn`;
    //     boardArray.forEach(cell => {
    //         cell.classList.remove('x');
    //         cell.classList.remove('o');
    //         cell.classList.remove('won');
    //     })
    //     gameRunning = true;

    // }

    // // Function to start the game

    // function playGame(event) {
    //     const classList = event.target.classList;

    //     if(!gameRunning && classList[1] === 'x' && classList[1] === 'o')
    //         return;

    //     if(playerTurn) {
    //         classList.add('x');            
    //     } else {
    //         classList.add('o')
    //     }
    //     checkGame();
    // }

    // resetButton.addEventListener('click', resetGame);
    // boardArray.forEach(cell => {
    //     cell.addEventListener('click', playGame);
    // })

    // Shortcut Code

    const gameStatus = document.querySelector('.status');
    const resetButton = document.querySelector('.reset');
    const board = document.querySelectorAll('.game-cell');
    const boardArray = Array.from(board);

    // console.log(boardArray);

    const xPlayer = 'X';
    const oPlayer = 'O';

    // playerTurn = true is X Player turn
    // playerTurn = false is O Player turn

    let playerTurn = true;
    let gameRunning = true;

    // Function to check current game status

    function checkGame() {

        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6]
        ]

        let winnerFound = false;

        winningConditions.forEach(condition => {
            let fieldOne = board[condition[0]].classList[1];
            let fieldTwo = board[condition[1]].classList[1];
            let fieldThree = board[condition[2]].classList[1];
            
            if(fieldOne && fieldOne === fieldTwo && fieldOne === fieldThree) {
                winnerFound = true
                
                board[condition[0]].classList.add('won');
                board[condition[1]].classList.add('won');
                board[condition[2]].classList.add('won');
            }
        })

        if(winnerFound){
            gameRunning = false;
            if(playerTurn) {
                gameStatus.innerHTML = `${xPlayer} won`;
            } else {
                gameStatus.innerHTML = `${oPlayer} won`;
            }
        } else {
            playerTurn = !playerTurn;
            let isDrawArray = boardArray.filter(field => !field.classList[1]);
            if(isDrawArray.length) {
                if(playerTurn) {
                    gameStatus.innerHTML = `${xPlayer} is next`;
                } else {
                    gameStatus.innerHTML = `${oPlayer} is next`;
                }
            } else {
                gameStatus.innerHTML = `DRAW`
            }
        }

    }
    
    // Function to reser the game to initial state

    function resetGame() {
        playerTurn = true;
        gameStatus.innerHTML = `${xPlayer} turn`;
        boardArray.forEach(cell => {
            cell.classList.remove('x');
            cell.classList.remove('o');
            cell.classList.remove('won');
        })
        gameRunning = true;

    }

    // Function to start the game

    function playGame(event) {
        const classList = event.target.classList;

        if(!gameRunning || classList[1] === 'x' || classList[1] === 'o')
            return;

        if(playerTurn) {
            classList.add('x');            
        } else {
            classList.add('o')
        }
        

        checkGame();
    }

    resetButton.addEventListener('click', resetGame);
    boardArray.forEach(cell => {
        cell.addEventListener('click', playGame);
    })
});

    