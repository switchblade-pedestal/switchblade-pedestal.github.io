document.getElementById("myButton1").addEventListener("click", question1);
document.getElementById("myButton2").addEventListener("click", question2);

function newQuestion1(){
	document.getElementById("question").innerHTML = "You have died of dysentery";
	document.getElementById("myButton1").removeEventListener("click", newQuestion1);
	document.getElementById("myButton1").addEventListener("click", redirections);
	document.getElementById("button1text").innerHTML = "WTF MAN";
}

function redirections(){
	location.href='http://www.google.com'
}

function question1(){
	 questionmaker("You turn back into a human, while still licking yourself",
	  "stop",
	  "keep going",
	  question1,
	  question2,
	  redirections,
	  redirections)
}

function question2(){
	 questionmaker("Your bark is so loud it blows out the wall of the room you are in, there is nothing beyond where the wall used to be",
	  "Step into the nothing",
	  "Continue barking at the remaining walls",
	  question1,
	  question2,
	  redirections,
	  redirections)
}

function questionmaker(newquestion, newbutton1text, newbutton2text, oldbuttonquestion1, oldbuttonquestion2, nextquestion1, nextquestion2){
	document.getElementById("question").innerHTML = newquestion;
	document.getElementById("button1text").innerHTML = newbutton1text;
	document.getElementById("button2text").innerHTML = newbutton2text;
	document.getElementById("myButton1").removeEventListener("click", oldbuttonquestion1);
	document.getElementById("myButton1").addEventListener("click", nextquestion1);
	document.getElementById("myButton2").removeEventListener("click", oldbuttonquestion2);
	document.getElementById("myButton2").addEventListener("click", nextquestion2);
}