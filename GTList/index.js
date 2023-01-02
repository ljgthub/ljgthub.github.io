
document.getElementById("musicBoxSeed");
document.getElementById("glassBoxSeed");
document.getElementById("displayBoxOutput");
document.getElementById("displayBoxInfo");

//Display Box
let displayBox = {    
    farmable: "No",
    block: +localStorage.getItem("displayBoxBlock"),
    seed: +localStorage.getItem("displayBoxSeed"),
    musicBoxSeed: +localStorage.getItem("musicBoxSeed"),
    glassBlockSeed: +localStorage.getItem("glassBlockSeed")
}

/* let displayBox = {    
    farmable: "No",
    block: 5,
    seed: 2,
    musicBoxSeed: 2,
    glassBlockSeed: 30
} */


//Output

displayBoxInfo.innerHTML = `
Farmable: ${displayBox.farmable}
      <br>
      Block: <input id="displayBoxBlock">/1<span> WL</span>
      <br>
      Seed: <input id="displayBoxSeed">/1<span> WL</span>
`
displayBoxBlock.value = displayBox.block
displayBoxSeed.value = displayBox.seed

musicBoxSeed.value = displayBox.musicBoxSeed;
glassBlockSeed.value = displayBox.glassBlockSeed;

sum = displayBox.glassBlockSeed / ((displayBox.musicBoxSeed + displayBox.glassBlockSeed) / displayBox.musicBoxSeed);
displayBoxOutput.value = sum.toFixed(2);

//Update
update.addEventListener("click", function () {

localStorage.setItem("musicBoxSeed", musicBoxSeed.value)
localStorage.setItem("displayBoxBlock", displayBoxBlock.value)
localStorage.setItem("displayBoxSeed", displayBoxSeed.value)
localStorage.setItem("glassBlockSeed", glassBlockSeed.value)

window.location.reload();
})


//Music Box
document.getElementById("duckySeed");
document.getElementById("oldeSeed");
document.getElementById("musicBoxOutput");
document.getElementById("musicBoxInfo");


let musicBox = {    
    farmable: "No",
    block: +localStorage.getItem("musicBoxBlock"),
    seed: +localStorage.getItem("musicBoxSeed"),
    duckySeed: +localStorage.getItem("duckySeed"),
    oldeSeed: +localStorage.getItem("oldeSeed")
}

/* let musicBox = {    
    farmable: "No",
    block: 5,
    seed: 2,
    duckySeed: 2,
    oldeSeed: 30
} */


//Output

musicBoxInfo.innerHTML = `
Farmable: ${musicBox.farmable}
      <br>
      Block: <input id="musicBoxBlock">/1<span> WL</span>
      <br>
      Seed: <input id="musicBoxSeed">/1<span> WL</span>
`

musicBoxBlock.value = musicBox.block
musicBoxSeed.value = musicBox.seed

duckySeed.value = musicBox.duckySeed;
oldeSeed.value = musicBox.oldeSeed;

sum2 = musicBox.oldeSeed / ((musicBox.duckySeed + musicBox.oldeSeed) / musicBox.duckySeed);
musicBoxOutput.value = sum2.toFixed(2);

//Update
update2.addEventListener("click", function () {

localStorage.setItem("musicBoxSeed", musicBoxSeed.value)
localStorage.setItem("musicBoxBlock", musicBoxBlock.value)
localStorage.setItem("duckySeed", duckySeed.value)
localStorage.setItem("oldeSeed", oldeSeed.value)

window.location.reload();
})