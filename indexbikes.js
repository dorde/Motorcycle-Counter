
let scooterCount = document.getElementById("scooter-el")
let advCount = document.getElementById("adv-el")
let sportCount = document.getElementById("sport-el")
let chopperCount = document.getElementById("chopper-el")
let countScooter = 0
let countAdv = 0
let countSport = 0
let countChopper = 0


    function scooter() {
    countScooter += 1
    scooterCount.textContent = countScooter
}

    function adv() {
        countAdv += 1
        advCount.textContent = countAdv
    }

    function sport() {
        countSport += 1
        sportCount.textContent = countSport
    }

    function chopper() {
        countChopper += 1
        chopperCount.textContent = countChopper
    }
    function startover(){
         countScooter = 0
         countAdv = 0
         countSport = 0
         countChopper = 0
         scooterCount.textContent = 0
         advCount.textContent = 0
         sportCount.textContent = 0
         chopperCount.textContent = 0

    }
    console.log(count)

 