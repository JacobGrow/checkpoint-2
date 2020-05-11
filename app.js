let rock = 0;
let increment = 1;
let lowOffered = 0;
let middleOffered = 0;
let highOffered = 0;
let savings = 0;
let i=0;


var lowTimeLeft = 3;
var middleTimeLeft = 10;
var highTimeLeft = 30;

function lowCountdown() {
  var elem = document.getElementById("lowTimer");
  var timerId = setTimeout(lowCountdown, 1000)
  elem.style.visibility = "visible"
  if (lowTimeLeft == -1) {
    acceptLowOffer()
    clearTimeout(timerId)
    elem.style.visibility="hidden"
  } else {
    elem.innerHTML = lowTimeLeft+ ' seconds remaining';
    lowTimeLeft--;
}
}

function middleCountdown() {
  var elem = document.getElementById("middleTimer");
  var timerId = setTimeout(middleCountdown, 1000)
  elem.style.visibility = "visible"
  if (middleTimeLeft == -1) {
    acceptMiddleOffer()
    clearTimeout(timerId)
    elem.style.visibility="hidden"
  } else {
    elem.innerHTML = middleTimeLeft+ ' seconds remaining';
    middleTimeLeft--;
}
}

function highCountdown() {
  var elem = document.getElementById("highTimer");
  var timerId = setTimeout(highCountdown, 1000)
  elem.style.visibility = "visible"
  if (highTimeLeft == -1) {
    acceptHighOffer()
    clearTimeout(timerId)
    elem.style.visibility="hidden"
  } else {
    elem.innerHTML = highTimeLeft+ ' seconds remaining';
    highTimeLeft--;
}
}


function mine(){
  rock = rock + increment;
  update()
    if (savings > 50){
      i = randomNumber(1, 1000)
      if (i>=1 && i<= 12){
        alert("Workers are on strike. Productivity is down and debt has drained your savings.")
        savings = 0;
        savingsToString();}
      else if (i>= 13 && i <= 25){
      alert("A work accident caused a law suit that cost you 50% of your savings.")
      savings = savings*.5;
      savingsToString()
    }
  }
}


function update(){
let newRock = JSON.stringify(rock)
newRock = rock.toFixed(2)
document.getElementById("rock").innerHTML = newRock;
let newPickNum = JSON.stringify(clickUpgrades.pickaxe.quantity)
document.getElementById("numPick").innerHTML = newPickNum;
let newPickPrice = JSON.stringify(clickUpgrades.pickaxe.price)
newPickPrice = clickUpgrades.pickaxe.price.toFixed(2)
document.getElementById("pickPrice").innerHTML = newPickPrice
let newDrillNum = JSON.stringify(clickUpgrades.laserDrill.quantity)
document.getElementById("numDrill").innerHTML = newDrillNum;
let newDrillPrice = JSON.stringify(clickUpgrades.laserDrill.price)
newDrillPrice = clickUpgrades.laserDrill.price.toFixed(2)
document.getElementById("drillPrice").innerHTML = newDrillPrice
let newExNum = JSON.stringify(clickUpgrades.ionExcavator.quantity)
document.getElementById("numEx").innerHTML = newExNum;
let newExPrice = JSON.stringify(clickUpgrades.ionExcavator.price)
newExPrice = clickUpgrades.ionExcavator.price.toFixed(2)
document.getElementById("exPrice").innerHTML = newExPrice
let newDroidNum = JSON.stringify(passiveUpgrades.droidMiner.quantity)
document.getElementById("numDroid").innerHTML = newDroidNum;
let newDroidPrice = JSON.stringify(passiveUpgrades.droidMiner.price)
newDroidPrice = passiveUpgrades.droidMiner.price.toFixed(2)
document.getElementById("droidPrice").innerHTML = newDroidPrice
let newRoverNum = JSON.stringify(passiveUpgrades.rover.quantity)
document.getElementById("numRover").innerHTML = newRoverNum;
let newRoverPrice = JSON.stringify(passiveUpgrades.rover.price)
newRoverPrice = passiveUpgrades.rover.price.toFixed(2)
document.getElementById("roverPrice").innerHTML = newRoverPrice
let newFreighterNum = JSON.stringify(passiveUpgrades.spaceFreighter.quantity)
document.getElementById("numFreighter").innerHTML = newFreighterNum;
let newFreighterPrice = JSON.stringify(passiveUpgrades.spaceFreighter.price)
newFreighterPrice = passiveUpgrades.spaceFreighter.price.toFixed(2)
document.getElementById("freighterPrice").innerHTML = newFreighterPrice
lowOffer()
middleOffer()
highOffer()
}

function savingsToString(){
  let newSavings=JSON.stringify(savings)
      newSavings = savings.toFixed(2)
      document.getElementById("savings").innerHTML = newSavings
}

let clickUpgrades = {
  pickaxe: {
    price: 10,
    quantity: 0,
    multiplier: 1 
},
  laserDrill: {
    price: 500,
    quantity: 0,
    multiplier: 10
  },
  ionExcavator: {
    price: 1000,
    quantity: 0,
    multiplier: 25 
  },
};

let passiveUpgrades = {
  droidMiner: {
    price: 100,
    quantity: 0,
    multiplier: 5
},
  rover: {
    price: 1000,
    quantity: 0,
    multiplier: 10
  },
  spaceFreighter: {
    price: 10000,
    quantity: 0,
    multiplier: 50
}
};

//Random Events



function smallOfferEvents(){
 i = randomNumber(1, 100)
  if (i >= 1 && i<=5){
    alert("Pirates have stolen your money while in transit")
    lowOffered = 0;
  } 
  else if(i>=6 && i<=15){
    alert("Galactic gangsters took 20% of your transaction as protection money")
    lowOffered = lowOffered*0.8
  }
  else if(i>=16 && i<=25){
    alert("A rival mining company blew up your facility. Your resources are gone.")
    lowOffered = 0;
  }
}

function middleOfferEvents(){
  i = randomNumber(1, 100)
    if (i >= 1 && i<=10){
      alert("The freighter captain took 50% of the transaction and fled.")
      middleOffered = middleOffered*.5
      }
  }

function highOfferEvents(){
  i = randomNumber(1, 1000)
    if (i >= 1 && i<=2){
      alert("Raiders attacked your facilities and looted your resources")
      highOffered = 0;
      }
  }




// Active Upgrades
function buyPickaxe(){
  if (savings >= clickUpgrades.pickaxe.price){
    savings -= clickUpgrades.pickaxe.price;
    clickUpgrades.pickaxe.quantity += 1;
    clickUpgrades.pickaxe.price *= 1.5;
    update()
    console.log("Pickaxe Purchased")
    console.log (clickUpgrades.pickaxe.quantity);
    increment = increment+clickUpgrades.pickaxe.multiplier
      console.log("Making more money now")
      console.log(savings)
      savingsToString()
      console.log(savings)
  }
  else{
    alert("You need more money")
  }
}

function buyDrill(){
  if (savings >= clickUpgrades.laserDrill.price){
    savings -= clickUpgrades.laserDrill.price;
    clickUpgrades.laserDrill.quantity += 1;
    clickUpgrades.laserDrill.price *= 5;
    update()
    console.log("laserDrill Purchased")
    console.log (clickUpgrades.laserDrill.quantity);
    increment = increment+clickUpgrades.laserDrill.multiplier;
      console.log("Making more money now")
      console.log(savings)
      savingsToString()
      console.log(savings)
  }
  else{
    alert("You need more money")
  }
}

function buyExcavator(){
  if (savings >= clickUpgrades.ionExcavator.price){
    savings -= clickUpgrades.ionExcavator.price;
    clickUpgrades.ionExcavator.quantity += 1;
    clickUpgrades.ionExcavator.price *= 20;
    update()
    console.log("Excavator Purchased")
    console.log (clickUpgrades.ionExcavator.quantity);
    increment = increment+clickUpgrades.ionExcavator.multiplier;
      console.log("Making more money now")
      console.log(savings)
      savingsToString()
      console.log(savings)
  }
  else{
    alert("You need more money")
  }
}

//Passive Upgrades
function buyDroid(){
  if (savings >= passiveUpgrades.droidMiner.price){
    savings -= passiveUpgrades.droidMiner.price;
    passiveUpgrades.droidMiner.quantity += 1;
    passiveUpgrades.droidMiner.price *= 5;
    update()
  }
  else{
    alert("You need more money")
  }
}

function buyRover(){
if (savings >= passiveUpgrades.rover.price){
  savings -= passiveUpgrades.rover.price;
  passiveUpgrades.rover.quantity += 1;
  passiveUpgrades.rover.price *= 5;
  update()
}
else{
  alert("You need more money")
}
}

function buyFreighter(){
  if (savings >= passiveUpgrades.spaceFreighter.price){
    savings -= passiveUpgrades.spaceFreighter.price;
    passiveUpgrades.spaceFreighter.quantity += 1;
    passiveUpgrades.spaceFreighter.price *= 5;
    update()
  }
  else{
    alert("You need more money")
  }
  }

  function collectPassiveUpgrades(){
let totalPassive = (passiveUpgrades.droidMiner.quantity*passiveUpgrades.droidMiner.multiplier)+(passiveUpgrades.rover.quantity*passiveUpgrades.rover.multiplier)+(passiveUpgrades.spaceFreighter.quantity*passiveUpgrades.spaceFreighter.multiplier)
console.log(totalPassive)
rock += totalPassive
let newRockNum = JSON.stringify(rock);
document.getElementById("rock").innerHTML = newRockNum
update()
  }

  function startInterval() {
  setInterval(collectPassiveUpgrades, 3000);
  }

  startInterval()

//Purchase Offers
function lowOffer(){
lowOffered = rock*2
let moneyOffer = JSON.stringify(lowOffered)
moneyOffer = lowOffered.toFixed(2)
document.getElementById("lowOffer").innerHTML = moneyOffer
}

function acceptLowOffer(){
  smallOfferEvents()
  savings += lowOffered;
  savingsToString()
  document.getElementById("lowOffer").innerHTML = "0"
  clear()
}

function middleOffer(){
  middleOffered = rock*1.5
  let moneyOffer = JSON.stringify(middleOffered)
  moneyOffer = middleOffered.toFixed(2)
  document.getElementById("middleOffer").innerHTML = moneyOffer
  }

function acceptMiddleOffer(){
    middleOfferEvents()
    savings += middleOffered;
    savingsToString()
    document.getElementById("middleOffer").innerHTML = "0"
    clear()
  }

function highOffer(){
    highOffered = rock
    let moneyOffer = JSON.stringify(highOffered)
    moneyOffer = highOffered.toFixed(2)
    document.getElementById("highOffer").innerHTML = moneyOffer
    }

function acceptHighOffer(){
    highOfferEvents()
    savings += highOffered;
    savingsToString()
    document.getElementById("highOffer").innerHTML = "0"
    clear()
    }


function clear(){
  lowOffered = 0;
  middleOffered =0;
  highOffered = 0;
  rock = 0;
  document.getElementById("rock").innerHTML ="0"
  lowTimeLeft = 3;
  middleTimeLeft = 10;
  highTimeLeft = 30;
}



 function randomNumber(min, max) {  
  return Math.floor(Math.random() * (max - min) + min); 
}  