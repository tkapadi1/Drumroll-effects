var numberofButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}

function handleClick() {
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
}


// makes the keyboard click listen to the key pressed and checks which key was pressed.
document.addEventListener("keydown", function keySound(event){ makeSound(event.key)});


// function that makes sound.
function makeSound(key) {
    buttonAnimation(key);
    switch (key) {
      case "f":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      default:
        console.log(this);
        break;
    }
}



function buttonAnimation(currentKey) {
    var actbutton = document.querySelector("."+currentKey);
    actbutton.classList.add("pressed");

    setTimeout(function () {
        actbutton.classList.remove("pressed");
    }, 100);
}