let pattern = document.getElementById("pattern");
let input = document.querySelector('input');
let bet = document.getElementById("bet");


let arr = []
let sum;
let trigger = false;


target.addEventListener('input', function rend() {
    
    if (target <= 5) {
        arr = []
    }

    obj()
    renderSum()
    patternFunc()
    

})

//objects & array iterate
let obj = () => {

    target = +document.getElementById("target").value;

    let seq = {
        num1: target * 0.1,
        num2: target * 0.2,
        num3: target * 0.2,
        num4: target * 0.3,
        num5: target * 0.2
    }
    
    if (target > 5) {
    
        arr[0] = seq.num1
        arr[1] = seq.num2
        arr[2] = seq.num3
        arr[3] = seq.num4
        arr[4] = seq.num5
    }
}

//sum function
let renderSum = () => {

    //sum
    
    if (target <= 5) {
        arr[0] = target
        sum = arr[0] 

        if (arr.length == 1) {
            sum = arr[0]
        }
        else {
            sum = arr[0] + arr[arr.length - 1];
        }
    }

    else if (arr.length == 1) {
        sum = arr[0]
        
    }
    else {
        sum = arr[0] + arr[arr.length - 1];
        
    }
    console.log(arr)
}

//pattern function
let patternFunc = () => {
    //pattern output:

    if (target <= 5) {
        pattern.value = target 

    }
    else {
        pattern.value = `${arr[0]} - ${arr[1]} - ${arr[2]} - ${arr[3]} - ${arr[4]}`
    }

    console.log(arr)

    //amount output: 
    bet.value = sum
}

//win button
win.addEventListener("click", function win() {
    pattern.value = ""

    arr.shift()
    arr.pop()

    for (let i = 0; i < arr.length; i++) {

        pattern.value += `${arr[i]} - `
        
    }
    pattern.value = pattern.value.slice(0, pattern.value.lastIndexOf(' -')) 
    

    renderSum()

    bet.value = sum
})

//lose button
lose.addEventListener("click", function lose() {

    renderSum()
    arr.push(sum)
    
    pattern.value += ` - ${sum}`

    //amount output: 
    bet.value = sum + arr[0]
})
