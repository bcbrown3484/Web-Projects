window.alert("You wake up to the sound of screams and pounding on your door, you get up and attempt to get your bearings when you hear the 'shink' sound of what is most likely blade.");
var startRoom = ["in your bathtub, so you are in your bathroom.", "in your bed, so you are in your bedroom.", "in your closet.", "on the kitchen floor, so you are in the kitchen."];
function randomNumber(range) {
    "use strict";
    return Math.round(Math.random() * range);
}
var room = randomNumber(startRoom.length - 1);
window.alert("You woke up " + startRoom[room] + " Now you realize you must grab an object that could be used as a weapon.");
var weapon = "nothing";
var selection = "1";
if (room === 0) {
    selection = window.prompt("To select type the selection number -- 1:Hair Brush, 2:Hair Dryer, 3:Bottle of Lotion -- If you do not select a weapon you will use your hands only.");
    if (selection === "1") {
        weapon = "a hair brush";
    } else if (selection === "2") {
        weapon = "a hair dryer";
    } else if (selection === "3") {
        weapon = "a bottle of lotion";
    } else {
        weapon = "hands";
    }
}
if (room === 1) {
    selection = window.prompt("To select type the selection number -- 1:Lava Lamp, 2:Alarm Clock, 3:Book -- If you do not select a weapon you will use your hands only.");
    if (selection === "1") {
        weapon = "a lava lamp";
    } else if (selection === "2") {
        weapon = "an alarm clock";
    } else if (selection === "3") {
        weapon = "a book";
    } else {
        weapon = "hands";
    }
}
if (room === 2) {
    selection = window.prompt("To select type the selection number -- 1:Shoe, 2:Coat Hanger, 3:Loose Shelf Plank -- If you do not select a weapon you will use your hands only.");
    if (selection === "1") {
        weapon = "a shoe";
    } else if (selection === "2") {
        weapon = "a coat hanger";
    } else if (selection === "3") {
        weapon = "a loose shelf plank";
    } else {
        weapon = "hands";
    }
}
if (room === 3) {
    selection = window.prompt("To select type the selection number -- 1:Knife, 2:Paper Towel Holder, 3:Box of Cheez-Its -- If you do not select a weapon you will use your hands only.");
    if (selection === "1") {
        weapon = "a knife";
    } else if (selection === "2") {
        weapon = "a paper towel holder";
    } else if (selection === "3") {
        weapon = "a box of Cheez-Its";
    } else {
        weapon = "hands";
    }
}
if (weapon === "hands") {
    window.alert("Unable to find anything you move to the door with your bare hands and slowly open the door. You find a Ninja ready with a sword above his head. He swings and you are unable to block his attack you are hit his sword. YOU LOSE!!! Better luck next time!");
} else {
    window.alert("You grab " + weapon + " and head to the door.");
    window.alert("You open the door quick and sudden like to catch the visitor off guard. The visitor is a Ninja and he swings a large katana at you as soon as the door is open. Acting fast you lift  " + weapon + " to block the sword.");
    var survival = randomNumber(2);
    if (survival === 0) {
        window.alert("Using " + weapon + " did not work you. Your object is sliced in half and you are hit with the katana sword. YOU LOSE!!! Better luck next time.");
    } else {
        window.alert("Using " + weapon + " worked! You were able to block the swing, but you are locked in a struggle.");
        var lastWords = window.prompt("With the sword stuck in " + weapon + ", you yell something out of desperity and confusion. You say -- (type your last words below)");
        window.alert("YOU: '" + lastWords + "' -- NINJA : Hmmm I see, I do not think you are who I am looking for. My apolagies.");
        window.alert("The ninja runs and jumps through your window and disappears into the night. You are finally safe. YOU WIN!!!! GOOD JOB!");
    }
}
var again = window.confirm("GAME OVER!!! PLAY AGAIN?");
if (again === true) {
    window.location.reload(false);
}
