let click = document.getElementsByClassName("click")
let h1 = document.getElementById("res")
let button = document.getElementById("reset")
let playerO = "O"
let playerX = "X"
let currentPlayer = ""

for (let x of click) {
x.addEventListener("click", func)
}

    function func() {
        
        if (currentPlayer == playerO) {

            currentPlayer = playerX
        } else {
            currentPlayer = playerO
        }

        if (this.innerText == "") {
        this.innerText = currentPlayer   
        checker("X")

        }
    }


function getX(curr) {
    return curr == "X";
}
function getO(curr) {
    return curr == "O";
}

let remove = () => {
    for (let x of click) {
    x.removeEventListener("click",func)
    }
}

let checker = (x) => {

    for (let ig = 0; ig <= 6; ig+=3) {
        if (click[ig].innerText != "" && click[ig + 1].innerText != "" && click[ig + 2].innerText != "") {
            if (click[ig].innerText == click[ig + 1].innerText && click[ig + 2].innerText == click[ig + 1].innerText && click[ig + 2].innerText == click[ig].innerText) {
                if (click[ig].innerText == x) {
                    h1.innerText = "Player 1 Wins"
                }
                else {
                    h1.innerText = "Player 2 Wins"
                }
                click[ig].style = "background-color: gray"
                click[ig + 1].style = "background-color: gray"
                click[ig + 2].style = "background-color: gray"
                remove()
            }
        }
    }

    for (let ig = 0; ig < 3; ig++) {
        if (click[ig].innerText != "" && click[ig + 3].innerText != "" && click[ig + 6].innerText != "") {
            if (click[ig].innerText == click[ig + 3].innerText && click[ig + 6].innerText == click[ig + 3].innerText && click[ig + 6].innerText == click[ig].innerText) {
                if (click[ig].innerText == x) {
                    h1.innerText = "Player 1 Wins"
                }
                else {
                    h1.innerText = "Player 2 Wins"
                }
                click[ig].style = "background-color: gray"
                click[ig + 3].style = "background-color: gray"
                click[ig + 6].style = "background-color: gray"
                remove()
            }
        }
    }

    let ig = 0
    if (click[ig].innerText != "" && click[ig + 4].innerText != "" && click[ig + 8].innerText != "") {
        if (click[ig].innerText == click[ig + 4].innerText && click[ig + 8].innerText == click[ig + 4].innerText && click[ig + 8].innerText == click[ig].innerText) {
            if (click[ig].innerText == x) {
                h1.innerText = "Player 1 Wins"
            }
            else {
                h1.innerText = "Player 2 Wins"
            }
            click[ig].style = "background-color: gray"
            click[ig + 4].style = "background-color: gray"
            click[ig + 8].style = "background-color: gray"
            remove()
        }
    }
    let ig2 = 2
    if (click[ig2].innerText != "" && click[ig2 + 2].innerText != "" && click[ig2 + 4].innerText != "") {
        if (click[ig2].innerText == click[ig2 + 2].innerText && click[ig2 + 4].innerText == click[ig2 + 2].innerText && click[ig2 + 4].innerText == click[ig2].innerText) {
            if (click[ig2].innerText == x) {
                h1.innerText = "Player 1 Wins"
            }
            else {
                h1.innerText = "Player 2 Wins"
            }
            click[ig2].style = "background-color: gray"
            click[ig2 + 2].style = "background-color: gray"
            click[ig2 + 4].style = "background-color: gray"
            remove()
        }
    }   
}      

button.addEventListener("click", function(){
    location.reload()

})


