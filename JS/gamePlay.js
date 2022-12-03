//Requires exactly one .gameArea <div> and a #startButton <button>.
//Use with gameArea.css!


let gameArea = document.querySelector(".gameArea");
document.getElementById("startButton").addEventListener("click", play);
window.onload = createBoxes;

function createBoxes() {
    for (let i = 0; i < 6; i++) {
        gameArea.appendChild(newBox());
    }


}

function newBox() {
    let box = document.createElement("div");
    box.style = "width:30%;height:auto;background-color:lightgrey;display:inline-block;" +
        "margin:5px;box-shadow:5px 5px grey;";
    box.classList.add("rounded-2");
    let image = document.createElement("img");
    image.src = "IMAGES/tc.jpg";
    image.style = "width:100%; height:100%;margin:auto;display:block;"
    image.classList.add("rounded-2", "hiddenImg");
    box.appendChild(image);
    return box;
}

function play() {
    let theScore = 0;
    let images = Array.from(document.querySelectorAll(".hiddenImg"));

    function choose() {
        let index = Math.floor(Math.random() * images.length);
        return images[index];
    }

    function show(e) {
        e.classList.remove("hiddenImg");
        e.classList.add("activeImg");
    }

    function hide() {
        let e = document.querySelector(".activeImg");
        e.classList.remove("activeImg");
        e.removeEventListener("click", score);
        e.removeEventListener("dragstart", score);
        e.classList.add("hiddenImg");
        setTimeout(toggle, 1000);
    }

    let i = 0;

    function toggle() {
        if (i < 10) {
            let image = choose();
            image.addEventListener("click", score, false);
            image.addEventListener("dragstart", score, false);
            show(image);
            i++;
            setTimeout(hide, 500);
        }
        else {
            alert("You scored " + theScore + " points!");
        }
    }

    function score(){
        console.log("scored");
        theScore++;
    }

    toggle();





}