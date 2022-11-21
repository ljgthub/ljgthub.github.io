const play = document.getElementById("play")
const dicepic = document.getElementById("dicepic")
let win = false
let dice = ""
let message = ""

const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")
const n4 = document.getElementById("n4")
const n5 = document.getElementById("n5")
const n6 = document.getElementById("n6")



let arr = []
const messagex2 = "You Win! x2🎉"
const messagex3 = "You Win! x3🎉"
const messagex4 = "You Win! x4🎉"
const messageLost = "You Lose!😔"
const range = document.getElementById("range")
const inp = document.getElementById("inp")
const th = document.getElementById("playerC")
const x = JSON.parse(localStorage.getItem("creditf"))

let credit


    if (x == null) {
        credit = 1000
        
    } else {
       credit = x   
    
    }


th.innerHTML = `Credits: $${credit}`

play.addEventListener("click", function(){

    
    arr = []
    dicepic.textContent = ""
    for (let i = 0; i < 3; i++) {
        dice = Math.floor(Math.random() * 6 + 1)
        renderDice() 
        arr.push(dice)
    }

    if (n1.value) {
        check1()
    } else if (n2.value) {
        check2()
    } else if (n3.value) {
        check3()
    } else if (n4.value) {
        check4()
    } else if (n5.value) {
        check5()
    } else if (n6.value) {
        check6()
    }

    
    
    
    render()

    localStorage.setItem("creditf", credit)



})


function render() {
    th.textContent = `Credits: $${credit}`
    msg.textContent = message

}

function renderDice() {
    
    if (dice == 1) {
        dicepic.innerHTML += `<img src="111.png" class="pics">`
    } 
    else if (dice == 2) {
        dicepic.innerHTML += `<img src="22.png" class="pics">`
    }
    else if (dice == 3) {
        dicepic.innerHTML += `<img src="33.png" class="pics">`
    }
    else if (dice == 4) {
        dicepic.innerHTML += `<img src="44.png" class="pics">`
    }
    else if (dice == 5) {
        dicepic.innerHTML += `<img src="55.png" class="pics">`
    }
    else if (dice == 6) {
        dicepic.innerHTML += `<img src="66.png" class="pics">`
    } 
}


function check1() {

    let d1 = n1.value

    if (1 == arr[0] && 1 == arr[1] && 1 == arr[2]) {
        message = messagex4
        credit = credit + d1*3 
    } else if (1 == arr[0] && 1 == arr[1]) {
        message = messagex3
        credit = credit + d1*3 
    } else if (1 == arr[0] && 1 == arr[2]) {
        message = messagex3
        credit = credit + d1*3 
    } else if (1 == arr[1] && 1 == arr[2]) {
        message = messagex3
        credit = credit + d1*2 
    } else if (1 == arr[0]) {
        message = messagex2
        credit = credit + d1*2
    } else if (1 == arr[1]) {
        message = messagex2
        credit = credit + d1*2 
    } else if (1 == arr[2]) {
        message = messagex2
        credit = credit + d1*2 
    } else {
        message = messageLost
        credit = credit - d1
    }
    
}

function check2() {

    let d2 = n2.value

    if (2 == arr[0] && 2 ==  arr[1] &&2 == arr[2]) {
        message = messagex4
        credit = credit + d2*3 
    } else if (2 == arr[0] && 2 == arr[1]) {
        message = messagex3
        credit = credit + d2*3 
    } else if (2 == arr[0] && 2 == arr[2]) {
        message = messagex3
        credit = credit + d2*3 
    } else if (2 == arr[1] && 2 == arr[2]) {
        message = messagex3
        credit = credit + d2*2 
    } else if (2 == arr[0]) {
        message = messagex2
        credit = credit + d2*2
    } else if (2 == arr[1]) {
        message = messagex2
        credit = credit + d2*2 
    } else if (2 == arr[2]) {
        message = messagex2
        credit = credit + d2*2 
    } else {
        message = messageLost
        credit = credit - d2
    }
   
}

function check3() {

    let d3 = n3.value

    if (3 == arr[0] && 3 == arr[1] && 3 == arr[2]) {
        message = messagex4
        credit = credit + d3*3 
    } else if (3 == arr[0] && 3 == arr[1]) {
        message = messagex3
        credit = credit + d3*3 
    } else if (3 == arr[0] && 3 == arr[2]) {
        message = messagex3
        credit = credit + d3*3 
    } else if (3 == arr[1] && 3 == arr[2]) {
        message = messagex3
        credit = credit + d3*2 
    } else if (3 == arr[0]) {
        message = messagex2
        credit = credit + d3*2
    } else if (3 == arr[1]) {
        message = messagex2
        credit = credit + d3*2 
    } else if (3 == arr[2]) {
        message = messagex2
        credit = credit + d3*2 
    } else {
        message = messageLost
        credit = credit - d3
    }
    
}

function check4() {

    let d4 = n4.value

    if (4 == arr[0] && 4 == arr[1] && 4 == arr[2]) {
        message = messagex4
        credit = credit + d4*3 
    } else if (4 == arr[0] && 4 == arr[1]) {
        message = messagex3
        credit = credit + d4*3 
    } else if (4 == arr[0] && 4 == arr[2]) {
        message = messagex3
        credit = credit + d4*3 
    } else if (4 == arr[1] && 4 == arr[2]) {
        message = messagex3
        credit = credit + d4*2 
    } else if (4 == arr[0]) {
        message = messagex2
        credit = credit + d4*2
    } else if (4 == arr[1]) {
        message = messagex2
        credit = credit + d4*2 
    } else if (4 == arr[2]) {
        message = messagex2
        credit = credit + d4*2 
    } else {
        message = messageLost
        credit = credit - d4
    }
    
}

function check5() {

    let d5 = n5.value

    if (5 == arr[0] && 5 == arr[1] && 5 == arr[2]) {
        message = messagex4
        credit = credit + d5*3 
    } else if (5 == arr[0] && 5 == arr[1]) {
        message = messagex3
        credit = credit + d5*3 
    } else if (5 == arr[0] && 5 == arr[2]) {
        message = messagex3
        credit = credit + d5*3 
    } else if (5 == arr[1] && 5 == arr[2]) {
        message = messagex3
        credit = credit + d5*2 
    } else if (5 == arr[0]) {
        message = messagex2
        credit = credit + d5*2
    } else if (5 == arr[1]) {
        message = messagex2
        credit = credit + d5*2 
    } else if (5 == arr[2]) {
        message = messagex2
        credit = credit + d5*2 
    } else {
        message = messageLost
        credit = credit - d5
    }
   
}

function check6() {

    let d6 = n6.value

    if (6 == arr[0] && 6 == arr[1] && 6 == arr[2]) {
        message = messagex4
        credit = credit + d6*3 
    } else if (6 == arr[0] && 6 == arr[1]) {
        message = messagex3
        credit = credit + d6*3 
    } else if (6 == arr[0] && 6 == arr[2]) {
        message = messagex3
        credit = credit + d6*3 
    } else if (6 == arr[1] && 6 == arr[2]) {
        message = messagex3
        credit = credit + d6*2 
    } else if (6 == arr[0]) {
        message = messagex2
        credit = credit + d6*2
    } else if (6 == arr[1]) {
        message = messagex2
        credit = credit + d6*2 
    } else if (6 == arr[2]) {
        message = messagex2
        credit = credit + d6*2 
    } else {
        message = messageLost
        credit = credit - d6
    }
    
}




