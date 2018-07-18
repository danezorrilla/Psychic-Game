# Psychic-Game
<br>
Can you guess the letter?
<br><br>
Description:<br>
In this game, you must figure out what letter the computer has randomly selected.
You have 13 tries to find out. If you answer correctly, you will win the game, however if you fail to answer correctly, you lose the game. The game will then reset and a new letter will be picked.
<br><br>
Instructions:<br>
1) Go to https://danezorrilla.github.io/Psychic-Game/<br>
2) Enter a keyboard input.<br>
3) The computer will check if the keyboard input matches the randomly selected charater.<br>
4) If there's a match, you will win the game, your win counter will be incremented by one and the game will reset.<br>
5) If there isn't a match, the number of guesses will be reduce by one.<br>
6) If your number of guesses reaches 0, you will lose the game, your lose counter will be incremented by one and game will reset.<br>
7) All previously gussed letters will be displayed on the screen.<br>
<br>
Process:<br>
1) I hold the alphabets in an array.<br>
2) I set the win and lose counter to 0 and the number of guesses to 13.<br>
3) I created a function that will get the randomly gets a letter from my alphabets array and update the DOM.<br>
4) I created a function that will check if the user input matches the ramdomly selected letter and checks the conditon.<br>
5) Call the function