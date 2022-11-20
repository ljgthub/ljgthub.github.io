const play = document.getElementById("play")
let win = false
let dice = 0
let message = ""
let credits = 1000
const x = JSON.parse(localStorage.getItem("credit"))
playerC.innerHTML = `Credits: $${credits}`


if (x) {
    credits = x
    render(credits)
}

play.addEventListener("click", function(){
    
    let bet = +document.getElementById("bet").value
    dice = Math.floor(Math.random() * 6 + 1)

    if (dice <= 3){
        message = "You Lose!"
        win = false
    } else {
        message = "You Win!"
        win = true
    }

    if (win) {
        credits = credits + bet
    }else {
        credits = credits - bet
    }

    if (dice == 1) {
        dicepic.innerHTML = `<img src="11.png">`
    } 
    else if (dice == 2) {
        dicepic.innerHTML = `<img src="22.png">`
    }
    else if (dice == 3) {
        dicepic.innerHTML = `<img src="33.png">`
    }
    else if (dice == 4) {
        dicepic.innerHTML = `<img src="44.png">`
    }
    else if (dice == 5) {
        dicepic.innerHTML = `<img src="55.png">`
    }
    else if (dice == 6) {
        dicepic.innerHTML = `<img src="66.png">`
    }







    localStorage.setItem("credit", credits)
    msg.textContent = message
    render(credits)
    
})


function render(cred) {
    
    playerC.innerHTML = `Credits: $${cred}`
    
}


