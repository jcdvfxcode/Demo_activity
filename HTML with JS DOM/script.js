
let name = "John Doe";

document.querySelector("#test").innerHTML = name;
document.querySelector("button").style.padding = "100px";
document.querySelector("button").style.backgroundColor = "red";

function testFunction(){
    confirm("Are you sure you want to?");
}

///////

let padding = "50px";

document.querySelector("button").style.padding = padding;


////
// anonymous function
document.querySelector("#btn").addEventListener("click", function(){            // recommended!!!!!
    paddingValue += 50;
    document.querySelector("button").style.paddingValue + "px";
}); 



// 
document.querySelector("#btn").addEventListener("keydown", function(){
    document.querySelector("#test").innerHTML = document.querySelector("#inpt").value;
});






//External JS by Udemy
document.querySelector("h1").innerHTML = "Good Bye";







// Exteral JS from HTML DICE GAME by  Udemy
let randomNumber1 = Math.floor(Math.random() * 6) + 1;      // Output : 1 to 6

let randomDiceImage = "dice" + randomNumber1 + ".png";      // Output : dice1.png to dice6.png    (picture of dice1-6) //dice(string) + random number 1 to 6 + .png

let randomImageSource = "images/" + randomDiceImage;        // Output : images/dice1.png to images/dice6.png    //sample from html: src="images/dice6.png">

let image1 = document.querySelectorAll("img")[0];           // Getting the img element using querySelectorAll and array Index number

image1.setAttribute("src", randomImageSource);              // Output : the Player 1 image is changing into different numbers base on image



let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// If player 1 wins

if( randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}







