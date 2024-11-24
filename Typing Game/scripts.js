let numberOfKeyButtons = document.querySelectorAll(".key").length;

for ( let i = 0; i < numberOfKeyButtons; i++) {
    document.querySelectorAll(".key")[i].addEventListener ("click", function () {

       let keyButtonInnerHTML = this.innerHTML;

       makeSound(keyButtonInnerHTML);

       animationButton (keyButtonInnerHTML);

    });
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    animationButton (event.key);

});

function makeSound (key) {

    switch (key) {
        case "w":
            let letterKey = new Audio("sound/clickSound.mp3");
            letterKey.play();
            break;

        case "a":
            let letterKey2 = new Audio("sound/clickSound.mp3");
            letterKey2.play();
            break;

        case "s":
            let letterKey3 = new Audio("sound/clickSound.mp3");
            letterKey3.play();
            break;
    
        case "d":
            let letterKey4 = new Audio("sound/clickSound.mp3");
            letterKey4.play();
            break;

        default: alert ("Wrong!");
    }
}

function animationButton (pressKey) {

    let clickButton = document.querySelector("." + pressKey);

    clickButton.classList.add("pressed");

    setTimeout (function() {
        clickButton.classList.remove("pressed");
    }, 100);

}
