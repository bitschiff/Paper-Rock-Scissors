var wins = 0;
var losses = 0;
var tie = 0;
var choices = ["Paper", "Rock", "Scissors"];





var elComputerPick = document.getElementById('computerPick');
elComputerPick.textContent = "Pick something to begin";

var elWinLoss = document.getElementById('winLoss');
elWinLoss.textContent = "Your win loss tie ratio is: " + wins + "/" + losses + "/" + tie;



document.getElementById("paperButton").addEventListener("click", paperPick);
document.getElementById("rockButton").addEventListener("click", rockPick);
document.getElementById("scissorButton").addEventListener("click", scissorPick);

document.getElementById("paperButton").addEventListener("mouseover", paperOver);
document.getElementById("rockButton").addEventListener("mouseover", rockOver);
document.getElementById("scissorButton").addEventListener("mouseover", scissorOver);

document.getElementById("paperButton").addEventListener("mouseout", paperNotOver);
document.getElementById("rockButton").addEventListener("mouseout", rockNotOver);
document.getElementById("scissorButton").addEventListener("mouseout", scissorNotOver);

function paperOver(){
	document.getElementById("paperButton").src = "paper-clicked.png"
}

function rockOver(){
	document.getElementById('rockButton').src='rock-clicked.png';
}

function scissorOver(){
	document.getElementById('scissorButton').src='scissors-clicked.png';
}

function paperNotOver(){
    document.getElementById("paperButton").src = "paper.png"
}

function rockNotOver(){
    document.getElementById('rockButton').src='rock.png';
}

function scissorNotOver(){
    document.getElementById('scissorButton').src='scissors.png';
}

function paperPick() {
	var el = document.getElementById('computerPick');
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    el.textContent = "The computer picks a: " + computerChoice;

    if(computerChoice=="Rock"){
    	wins+=1;
    	var el = document.getElementById('outcome');
    	el.textContent = "You won!";
    }else if(computerChoice=="Scissors"){
    	losses+=1;
    	var el = document.getElementById('outcome');
    	el.textContent = "You lost";
    }else{
    var el = document.getElementById('outcome');
    	el.textContent = "You tied";
    	tie+=1;
	}



    var el = document.getElementById('winLoss');
    el.textContent = "Your win/loss/tie ratio is: " + wins + "/" + losses + "/" + tie;
}
function rockPick() {
   var el = document.getElementById('computerPick');
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    el.textContent = "The computer picks a: " + computerChoice;

    if(computerChoice=="Paper"){
    	losses+=1;
    	var el = document.getElementById('outcome');
    	el.textContent = "You lost";
    }else if(computerChoice=="Scissors"){
    	wins+=1;
    	var el = document.getElementById('outcome');
    	el.textContent = "You won!";
    }else{
    var el = document.getElementById('outcome');
    	el.textContent = "You tied";
    	tie+=1;
	}

    var el = document.getElementById('winLoss');
    el.textContent = "Your win/loss/tie ratio is: " + wins + "/" + losses+ "/" + tie;
}

function scissorPick() {
   var el = document.getElementById('computerPick');
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    el.textContent = "The computer picks a: " + computerChoice;

    if(computerChoice=="Rock"){
    	losses+=1;
    	var el = document.getElementById('outcome');
    	el.textContent = "You lost";
    }else if(computerChoice=="Paper"){
    	wins+=1;
    	var el = document.getElementById('outcome');
    	el.textContent = "You won!";
    }else{
    var el = document.getElementById('outcome');
    	el.textContent = "You tied";
    	tie+=1;
	}

    var el = document.getElementById('winLoss');
    el.textContent = "Your win/loss/tie ratio is: " + wins + "/" + losses + "/" + tie;
}
