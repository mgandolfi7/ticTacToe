let waitingOn0 = false;
let cell0 = ""
let cell1 = ""
let cell2 = ""
let cell3 = ""
let cell4 = ""
let cell5 = ""
let cell6 = ""
let cell7 = ""
let cell8 = ""

document.querySelector("#cell0").addEventListener("click", cell0Move);
document.querySelector("#cell1").addEventListener("click", cell1Move);
document.querySelector("#cell2").addEventListener("click", cell2Move);
document.querySelector("#cell3").addEventListener("click", cell3Move);
document.querySelector("#cell4").addEventListener("click", cell4Move);
document.querySelector("#cell5").addEventListener("click", cell5Move);
document.querySelector("#cell6").addEventListener("click", cell6Move);
document.querySelector("#cell7").addEventListener("click", cell7Move);
document.querySelector("#cell8").addEventListener("click", cell8Move);
document.querySelector("button").addEventListener("click", restart);


function cell0Move() {
    if (waitingOn0 === false) {
        cell0 = document.querySelector("#cell0").innerText = "X"
        waitingOn0 = true;
        checkXWin()
        checkOWin()
        checkTie()
    } else {
        cell0 = document.querySelector("#cell0").innerText = "O"
        waitingOn0 = false;
        checkXWin()
        checkOWin()
        checkTie()
    }
}

function cell1Move() {
    if (waitingOn0 === false) {
        cell1 = document.querySelector("#cell1").innerText = "X"
        waitingOn0 = true;
        checkXWin()
        checkOWin()
        checkTie()
    } else {
        cell1 = document.querySelector("#cell1").innerText = "O"
        waitingOn0 = false;
        checkXWin()
        checkOWin()
        checkTie()
    }
}

function cell2Move() {
    if (waitingOn0 === false) {
        cell2 = document.querySelector("#cell2").innerText = "X"
        waitingOn0 = true;
        checkXWin()
        checkOWin()
        checkTie()
    } else {
        cell2 = document.querySelector("#cell2").innerText = "O"
        waitingOn0 = false;
        checkXWin()
        checkOWin()
        checkTie()
    }
}

function cell3Move() {
    if (waitingOn0 === false) {
        cell3 = document.querySelector("#cell3").innerText = "X"
        waitingOn0 = true;
        checkXWin()
        checkOWin()
        checkTie()
    } else {
        cell3 = document.querySelector("#cell3").innerText = "O"
        waitingOn0 = false;
        checkXWin()
        checkOWin()
        checkTie()
    }
}

function cell4Move() {
    if (waitingOn0 === false) {
        cell4 = document.querySelector("#cell4").innerText = "X"
        waitingOn0 = true;
        checkXWin()
        checkOWin()
        checkTie()
    } else {
        cell4 = document.querySelector("#cell4").innerText = "O"
        waitingOn0 = false;
        checkXWin()
        checkOWin()
        checkTie()
    }
}

function cell5Move() {
    if (waitingOn0 === false) {
        cell5 = document.querySelector("#cell5").innerText = "X"
        waitingOn0 = true;
        checkXWin()
        checkOWin()
        checkTie()
    } else {
        cell5 = document.querySelector("#cell5").innerText = "O"
        waitingOn0 = false;
        checkXWin()
        checkOWin()
        checkTie()
    }
}

function cell6Move() {
    if (waitingOn0 === false) {
        cell6 = document.querySelector("#cell6").innerText = "X"
        waitingOn0 = true;
        checkXWin()
        checkOWin()
        checkTie()
    } else {
        cell6 = document.querySelector("#cell6").innerText = "O"
        waitingOn0 = false;
        checkXWin()
        checkOWin()
        checkTie()
    }
}

function cell7Move() {
    if (waitingOn0 === false) {
        cell7 = document.querySelector("#cell7").innerText = "X"
        waitingOn0 = true;
        checkXWin()
        checkOWin()
        checkTie()
    } else {
        cell7 = document.querySelector("#cell7").innerText = "O"
        waitingOn0 = false;
        checkXWin()
        checkOWin()
        checkTie()
    }
}

function cell8Move() {
    if (waitingOn0 === false) {
        cell8 = document.querySelector("#cell8").innerText = "X"
        waitingOn0 = true;
        checkXWin()
        checkOWin()
        checkTie()
    } else {
        cell8 = document.querySelector("#cell8").innerText = "O"
        waitingOn0 = false;
        checkXWin()
        checkOWin()
        checkTie()
    }
}

function checkXWin() {
    if (cell0 === "X" && cell1 === "X" && cell2 === "X" || cell3 === "X" && cell4 === "X" && cell5 === "X" || cell6 === "X" && cell7 === "X" && cell8 === "X" || cell0 === "X" && cell3 === "X" && cell6 === "X" || cell1 === "X" && cell4 === "X" && cell7 === "X" || cell2 === "X" && cell5 === "X" && cell8 === "X" || cell0 === "X" && cell4 === "X" && cell8 === "X") {
        alert("X WINS!")
}
}

function checkOWin() {
    if (cell0 === "O" && cell1 === "O" && cell2 === "O" || cell3 === "O" && cell4 === "O" && cell5 === "O" || cell6 === "O" && cell7 === "O" && cell8 === "O" || cell0 === "O" && cell3 === "O" && cell6 === "O" || cell1 === "O" && cell4 === "O" && cell7 === "O" || cell2 === "O" && cell5 === "O" && cell8 === "O" || cell0 === "O" && cell4 === "O" && cell8 === "O") {
        alert("O WINS!")
} 
}

function checkTie() {
    if (cell0 !== "" && cell1 !== "" && cell2 !== "" && cell3 !== "" && cell4 !== "" && cell5 !== "" && cell6 !== "" && cell7 !== "" && cell8 !== "") {
        alert("TIED GAME!")
    }
}

function restart() {
    location.reload()
}
