let pattern = document.getElementById("pattern");
let input = document.querySelector('input');
let bet = document.getElementById("bet");


let arr = []
let sum;
let trigger = false;





target.addEventListener('input', function rend() {
    arr = []
    obj()
    renderSum()
    patternFunc()


})

//function for setting array and getting target value
let obj = () => {

    target = +document.getElementById("target").value;

    arr[0] = target
    
}

//sum function
let renderSum = () => {

    //sum
    
    sum = arr[0]

    console.log(sum)
    console.log(arr)
}

//pattern function
let patternFunc = () => {
    //pattern output:
    pattern.value = target

    //amount output: 
    bet.value = sum
}

//win button
win.addEventListener("click", function win() {

    arr = [target]
    pattern.value = target
    bet.value = target
    sum = target

})

//lose button
lose.addEventListener("click", function lose() {

   
    arr.push(sum)

    pattern.value += ` - ${sum}`

    sum = 0

    for (let x of arr) {
        sum += x
    }

    //amount output: 
    bet.value = sum

    console.log(arr)
    console.log(sum)
})


reset.addEventListener("click", function reset() {

    arr = []
    sum = 0
    document.getElementById("form").reset()

})