var diceone = Math.floor((Math.random()) * 6 + 1);
var dicetwo = Math.floor((Math.random()) * 6 + 1);

console.log(diceone);
console.log(dicetwo);
 
if(diceone > dicetwo)
{
    document.getElementById("player1").innerHTML = "Player 1 <br> WINNER";
    document.getElementById("player2").innerHTML = "Player 2 <br> LOSER";
}
else if(diceone < dicetwo)
{
    document.getElementById("player2").innerHTML = "Player 2 <br> WINNER";
    document.getElementById("player1").innerHTML = "Player 1 <br> LOSER";

}
else{
 
    document.getElementById("player1").innerHTML = "Player 1 <br> DRAW";
    document.getElementById("player2").innerHTML = "PLayer 2 <br> DRAW";

}
switch(diceone)
{
case 1 : document.getElementById('img1').src="images/dice1.png";
break;
case 2 : document.getElementById('img1').src="images/dice2.png";
break;
case 3 : document.getElementById('img1').src="images/dice3.png";
break;
case 4 : document.getElementById('img1').src="images/dice4.png";
break;
case 5 : document.getElementById('img1').src="images/dice5.png";
break;
case 6 : document.getElementById('img1').src="images/dice6.png";
break;
}
switch(dicetwo)
{
case 1 : document.getElementById('img2').src="images/dice1.png";
break;
case 2 : document.getElementById('img2').src="images/dice2.png";
break;
case 3 : document.getElementById('img2').src="images/dice3.png";
break;
case 4 : document.getElementById('img2').src="images/dice4.png";
break;
case 5 : document.getElementById('img2').src="images/dice5.png";
break;
case 6 : document.getElementById('img2').src="images/dice6.png";
break;
}
