// thumsup counter

const count= document.getElementById("heart-text")
const hideSpacer = document.getElementById("count-spacer-show")
const showCount = document.getElementById("count-container")
let thumsupCount = 0;

function increment(){
        thumsupCount++;
        
        if (thumsupCount === 1) {
            count.innerHTML =`   ${thumsupCount} Like!`
        } else if (thumsupCount >= 2 && thumsupCount <= 9){
             count.innerHTML =`  ${thumsupCount} Likes!`
         } else if (thumsupCount >= 10 && thumsupCount <= 99) {
             count.innerHTML =` ${thumsupCount} Likes!`
         } else {
            count.innerHTML =`${thumsupCount} Likes!`

         }
        hideSpacer.classList.add("hide")
        showCount.classList.remove('hide')
     
}

// game score buttons

const addOneBtnAway = document.getElementById("add-one-away")
const addTwoBtnAway = document.getElementById("add-two-away")
const addThreeBtnAway = document.getElementById("add-three-away")

const addOneBtnHome = document.getElementById("add-one-home")
const addTwoBtnHome = document.getElementById("add-two-home")
const addThreeBtnHome = document.getElementById("add-three-home")

const awayScore = document.getElementById("away-score")
const homeScore = document.getElementById("home-score")

let awayScoreDigits = 0;
let homeScoreDigits = 0;

function addOne(x){
    if (x == "away"){
        awayScoreDigits += 1
        if (awayScoreDigits <= 9){
            awayScore.innerHTML = `0${awayScoreDigits}`
        } else{
        awayScore.innerHTML = `${awayScoreDigits}`;}
    } else {
        homeScoreDigits +=1
        if (homeScoreDigits <= 9){
            homeScore.innerHTML = `0${homeScoreDigits}`
        } else 
        {homeScore.innerHTML = `${homeScoreDigits}`}
    }  
};

function addTwo(x){
    if (x == "away"){
        awayScoreDigits += 2
        if (awayScoreDigits <= 9){
            awayScore.innerHTML = `0${awayScoreDigits}`
        } else
        {awayScore.innerHTML = `${awayScoreDigits}`}
    } else {
        homeScoreDigits +=2
        if(homeScoreDigits <= 9){
            homeScore.innerHTML = `0${homeScoreDigits}`
        } else 
        {homeScore.innerHTML = `${homeScoreDigits}`}
    }
};

function addThree(x){
    if (x == "away"){
        awayScoreDigits += 3
        if (awayScoreDigits <= 9){
            awayScore.innerHTML = `0${awayScoreDigits}`
        } else
        {awayScore.innerHTML = `${awayScoreDigits}`;}
    } else {
        homeScoreDigits +=3
        if(homeScoreDigits <= 9){
            homeScore.innerHTML = `0${homeScoreDigits}`
        } else
        {homeScore.innerHTML = `${homeScoreDigits}`}
    }
};

addOneBtnAway.addEventListener("click", function(){
    addOne('away')
})

addTwoBtnAway.addEventListener("click", function(){
    addTwo("away")
})
addThreeBtnAway.addEventListener("click", function(){
    addThree('away')
})
addOneBtnHome.addEventListener("click", function(){
    addOne("home")
})
addTwoBtnHome.addEventListener("click", function(){
    addTwo("home")
})
addThreeBtnHome.addEventListener("click", function(){
    addThree("home")
})