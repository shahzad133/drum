for (i=0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        soundGenerator(this.innerHTML); 
        buttonAnimation(this.innerHTML);
    })
}

document.addEventListener("keypress", function(event) {
    soundGenerator(event.key);
    buttonAnimation(event.key);
})


function soundGenerator (e) {
    switch(e) {
        case "w":
        case "W":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "a":
        case "A":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "s":
        case "S":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "d":
        case "D":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "j":
        case "J":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "k":
        case "K":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "l":
        case "L":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        default:
            console.log(this.e);
        break;
    }    
}


function buttonAnimation (buttonKey) {
    document.querySelector("."+buttonKey).classList.add("pressed");

    setTimeout( function() {
        document.querySelector("."+buttonKey).classList.remove("pressed");
    }, 100);
}
