
const num = document.getElementsByClassName("num")
let bs = document.getElementById("bs")
const c = document.getElementById("c")


let firstN = ""
let secN = ""
let plus = false
let minus = false
let times = false
let divide = false
let sec = false
let ans = 0
let contin = false
let result = ""
let digits = 0
let numCont = ""
let operator = ""


let backspace = () => {
    display.value = display.value.slice(0, -1)

    if (display.value[display.value.length - 1] == " ")
        display.value = display.value.slice(0, -1)
    
    else if (display.value[display.value.length - 1] == ",")
        display.value = display.value.slice(0, -1)
    
    if (secN != "") {
        secN = secN.slice(0,-1)
        console.log(secN)
    }
    else if (!secN) {
        plus = false
        minus = false
        times = false
        divide = false
        sec = false
        firstN = firstN.toString().slice(0, -1)
    }
    }
let convert = (num) => num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")


let add = (num1,num2) => num1 + num2
let substract = (num1,num2) => num1 - num2
let multiply = (num1,num2) => num1 * num2
let divideF = (num1,num2) => num1 / num2

let cont2 = "" 



let outputF = () => {
    if (plus) {
        ans = add(firstN, +secN)
        output.value = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
    }
    else if (minus) {
        ans = substract(firstN, +secN)
        output.value = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    }
    else if (times) {
        ans = multiply(firstN, +secN)
        output.value = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    }
    else if (divide) {
        ans = divideF(firstN, +secN)
        output.value = ans.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    }
    else {
        output.value = `${display.value}`
    }
}
    for (let i = 0; i < num.length; i++) {
        
            num[i].addEventListener("click", function() {
                const box = document.querySelectorAll(".heart")
                
                if(box[1].classList.contains('hearty')) {
                    for (let i = 0; i < box.length; i++) {
                        box[i].classList.toggle("hearty");
                    }
                }
            if (sec) {
            
                numCont += this.innerText  
                secN += this.innerText;
                digits++
            
                display.value += convert(this.innerText)

            } else {
               
                
                numCont += this.innerText
                firstN += this.innerText
                digits++
                display.value = convert(firstN)
            }
            outputF()
})     
        }



c.addEventListener("click", function() {
    const box = document.querySelectorAll(".heart")
                
    if(box[1].classList.contains('hearty')) {
        for (let i = 0; i < box.length; i++) {
            box[i].classList.toggle("hearty");
        }
    }
    numCont = ""
    display.value = ""
    output.value = ""
    firstN = ""
    secN = ""
    cont2 = ""
    plus = false
    minus = false
    times = false
    divide = false
    contin = false
    sec = false
    display.style = "font-weight: bold; font-size: 24px;"
    output.style = "font-weight: 500; font-size: 16px;";
})
plus_button.addEventListener("click", function() {

    if (contin) {
        display.value = output.value
        display.value += ` ${this.innerText} `
        display.style = "font-weight: bold; font-size: 24px;"
        output.style = "font-weight: 500; font-size: 16px;";
    }
    else if (display.value != "") {
        display.value += ` ${this.innerText} `
        
    }
    firstN = parseFloat(output.value.replace(/,/g, ''));
        plus = true
        minus = false
        times = false
        divde = false
        sec = true
        secN = ""
        digits = 0
        cont2 = ""
        operator = this.innerText
})

divide_button.addEventListener("click", function() {
    if (contin) {
        display.value = output.value
        display.value += ` ${this.innerText} `
        display.style = "font-weight: bold; font-size: 24px;"
        output.style = "font-weight: 500; font-size: 16px;";
    }
    else if (display.value != "") {
        display.value += ` ${this.innerText} `
        
    }
    firstN = parseFloat(output.value.replace(/,/g, ''));
    divide = true
    minus = false
    times = false
    plus = false
    sec = true
    secN = ""
    digits = 0
    cont2 = ""
    operator = this.innerText
})
times_button.addEventListener("click", function() {
    if (contin) {
        display.value = output.value
        display.value += ` ${this.innerText} `
        firstN = +output.value
        display.style = "font-weight: bold; font-size: 24px;"
        output.style = "font-weight: 500; font-size: 16px;";
    }
    else if (display.value != "") {
        display.value += ` ${this.innerText} `
        
    }
    
    firstN = parseFloat(output.value.replace(/,/g, ''));
    times = true
    divide = false
    minus = false
    plus = false
    sec = true
    secN = ""
    digits = 0
    cont2 = ""
    operator = this.innerText
})
minus_button.addEventListener("click", function() {
    if (contin) {
        display.value = output.value
        display.value += ` ${this.innerText} `
        display.style = "font-weight: bold; font-size: 24px;"
        output.style = "font-weight: 500; font-size: 16px;";
    }
    else {
        display.value += ` ${this.innerText} `
    }
    firstN = parseFloat(output.value.replace(/,/g, ''));
    minus = true
    divde = false
    plus = false
    times = false
    sec = true
    secN = ""
    digits = 0
    cont2 = ""
    operator = this.innerText
})


eq.addEventListener("click", function() {
    firstN = 0;
    secN = 0;
    display.style = "font-weight: 300; font-size: 1rem;"
    const box = document.querySelectorAll(".heart")

    for (let i = 0; i < box.length; i++) {
        box[i].classList.toggle("hearty");
    }
    output.value = "I miss you  :<"
    output.style = "font-weight: bold; font-size: 2rem;";
    ans = +output.value
    firstN = ans
    plus = false
    minus = false
    times = false
    divide2 = false
    sec = false
    contin = true
})
bs.addEventListener("click", function() {
    backspace()
    outputF()
})
percent.addEventListener("click", function() {
    
    

    switch (operator) {
        case plus_button.innerText: 
        display.value = `${firstN} + ${parseFloat(secN)/100}`
        break;
        case minus_button.innerText: 
        display.value = `${firstN} - ${parseFloat(secN)/100}`
        break;
        case times_button.innerText: 
        console.log(secN)
        display.value = `${firstN} ${times_button.innerText} ${parseFloat(secN)/100} `
        break;
        case divide_button.innerText: 
        display.value = `${firstN} ${divide_button.innerText} ${parseFloat(secN)/100}`
    }

    if (secN) {
        secN = parseFloat(secN) / 100
    }
    outputF()
})

mode.addEventListener("click", function(){
    
    //light mode
    if (this.innerHTML == `<i class="fa-solid fa-sun"></i>`) {
        this.innerHTML = `<i class="fa-solid fa-moon"></i>`
        var element = document.body;
        element.classList.toggle("light-mode");
    }
    //dark mode
    else if (this.innerHTML == `<i class="fa-solid fa-moon"></i>`) {
        this.innerHTML = `<i class="fa-solid fa-sun"></i>`
        var element = document.body;
        element.classList.toggle("light-mode");
    }
    

})


