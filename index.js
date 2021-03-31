var botones = document.querySelectorAll("button");
for (var i=0; i< botones.length; i++){
    botones[i].addEventListener("click", handleClick);

}
document.addEventListener("keydown", function(event){
    reproducir(event.key);
    animation(event.key);
})

function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    reproducir(buttonInnerHTML);
    animation(buttonInnerHTML);
}

function reproducir(tecla){
    switch (tecla) {
        case "w":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
            break;
        case "a":
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
            break;
        case "s":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
            break;
        case "d":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
            break;
        case "j":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
            break;
        case "k":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
            break;
        case "l":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
            break;
        default:
    }
}

function animation(letra){
    var activeLetter = document.querySelector("." + letra);
    activeLetter.classList.add("pressed");
    setTimeout(function(){
        activeLetter.classList.remove("pressed");
    }, 100);
}
