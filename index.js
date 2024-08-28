// var audio = new Audio('sounds/tom-1.mp3');
var num = document.querySelectorAll(".drum").length
for(var i=0;i<num;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var word = this.innerHTML; 
    makeSound(word);
    animation(word);
    
});
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animation(event.key);
})

function makeSound(key){
    switch (key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(sound);
    }
}

function animation(key){
    var newkey = document.querySelector("."+key);
    newkey.classList.add("pressed");
    setTimeout(function(){
        newkey.classList.remove("pressed");
    }, 100);
}

// audio.play();