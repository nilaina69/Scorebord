
let homeCount = 0 ;
let guestCount = 0 ;
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")


function homeadd1pt() {
    homeCount += 1
    homeEl.textContent = homeCount
}
function homeadd2pts() {
    homeCount += 2
    homeEl.textContent = homeCount
}
function homeadd3pts() {
    homeCount += 3
    homeEl.textContent = homeCount
}

//function guest

function guestadd1pt() {
    guestCount += 1
    guestEl.textContent = guestCount
}
function guestadd2pts() {
    guestCount += 2
    guestEl.textContent = guestCount
}
function guestadd3pts() {
    guestCount += 3
    guestEl.textContent = guestCount
}


