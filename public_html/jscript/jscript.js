/* Melih Eren Arslan */

// This will create an array between for cells. It will go up to 8 and starts from 0.
var board = document.getElementsByTagName("td");

// assuming we index the 9 tic tac toe cells from left to right, top to
// bottom, as 0-8, these would be all of the winning combinations:
var winSets = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// X always gets to go first
var player = "X";

// there is 9 empty cells in total
var empty = 9;

// keep track of game status - false if still playing
var gameOver = false;

/* Function resetGame() is called when user clicks on the "game reset" button
 1. sets content of all 9 cells to nothing
 2. sets the starting player (this version, X always starts the game)
 3. updates the message to the current player
 4. resets the number of empty cells to 9
 5. sets the game over flag to false to indicate that the game is in progress
 */
function resetGame() {

    // Reset each cell and make them empty.   
    
    for ( i = 0; i < board.length; i++) {
        board[i].innerHTML = "";
    }
  
    // Reset player back to X, then it changes the player x again as a first player.
    var player = "X";
    document.getElementById('player').innerHTML= player;    
    

    // Reset gameOver and # of empty cells number.
    empty = 9;
    gameOver= false;
   
    
}

/* Function cellClicked() is called
 when the event listeners for the "td" cells fire which occurs
 when the user clicks on one of the nine cells of the board
 1. decreases # of empty cells by 1
 2. sets the content of the clicked cell to the current player's mark
 3. checks whether or not there is a winner
 4. flips (changes) the current player
 5. updates the message to the current player
 */
function cellClicked(cell) {     
    
    
    // If the game resets on O turn, the game will start again with X.
    if(empty == 9) {
        player = "X";
    }
    
    
  
    // This code checks if the cells empty, and if the game is still running. 
    // If not, the user will not be able to click to the cell.    
    var a = document.querySelectorAll('td');
    if(empty > 0 && a[cell].innerHTML === '' && gameOver !== true){  
        a[cell].innerHTML= player;        
        empty -=1;
    cell.innerHTML = player;
    checkWin();    
    player = (player === "X") ? "O" : "X";
    document.getElementById("player").innerHTML = player;
    }
}

/* Function checkWin() is called to check all winning combinations and display results
 */
function checkWin() {

    // After each click, it will control if there is a winning combination.
    // If there is a winning combination it will display the dinner.
    for ( i = 0; i < winSets.length; i++) {
        if (board[winSets[i][0]].innerHTML == board[winSets[i][1]].innerHTML 
            && board[winSets[i][1]].innerHTML == board[winSets[i][2]].innerHTML 
            && board[winSets[i][0]].innerHTML != "") {                    
            
            gameOver = true;
            document.getElementById('winner').innerHTML = player + " Wins!";            
            displayWin(true);            
        }
    }

    // If there is no empty cell left and no one won it will display a non winner message.
    if(empty == 0){
    gameOver = true;
    document.getElementById('winner').innerHTML = "No one wins! :( Play Smart Next Time :) ";
    displayWin(true);
    }
    
}

/* Enhancements you can try:
- highlight (change background colour) of the cell that was just clicked to indicate that it was the last move; make sure it goes back to the regular background when the next user clicks
- make the starting player random
- keep track of statistics (how many times each player wins)
- hide the "Player X Go!" on startup; show it only while game is playing
- when a winner is determined, the player information still swaps: would be nice if it didn't (I would
automatically hide those things before the game starts and when it ends (Week 3))
- change the font colour of the winning combination (don't forget to change it back when the game is reset)
*/

// ==========================================================================
// DON'T TOUCH THESE LINES OF CODE  (we'll learn this stuff in a later lesson)
document.getElementById("reset").addEventListener("click", resetGame);
document.getElementById("message").addEventListener("click", function() {
    displayWin(false);
});
for ( i = 0; i < board.length; i++) {
    document.getElementsByTagName("td")[i].addEventListener("click", function() {
        cellClicked(this);
    });
}
// displays the results window with the winner inside it: the method will
// either show the results or hide them (displayWin(true) shows and 
// displayWin(false) hides)
function displayWin(show) {
    if (show) {
        document.getElementById("message").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    } else {
        document.getElementById("message").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
}

// ===============================================================