// --- HOME SECTION ---
let homeNumberDisplay = document.querySelector(".homeNumber-display");
let plusOneH = document.querySelector(".plusone-h");
let plusTwoH = document.querySelector(".plusotwo-h");
let plusThreeH = document.querySelector(".plusthree-h");

plusOneH.onclick = function() {
    let score = Number(homeNumberDisplay.textContent);
    score += 1;
    homeNumberDisplay.textContent = score;
};

plusTwoH.onclick = function() {
    let score = Number(homeNumberDisplay.textContent);
    score += 2;
    homeNumberDisplay.textContent = score;
};

plusThreeH.onclick = function() {
    let score = Number(homeNumberDisplay.textContent);
    score += 3;
    homeNumberDisplay.textContent = score;
};


// --- GUEST SECTION ---
let guestNumberDisplay = document.querySelector(".guestNumber-display");
let plusOneG = document.querySelector(".plusone-g");
let plusTwoG = document.querySelector(".plusotwo-g");
let plusThreeG = document.querySelector(".plusthree-g");

plusOneG.onclick = function() {
    let score = Number(guestNumberDisplay.textContent);
    score += 1;
    guestNumberDisplay.textContent = score;
};

plusTwoG.onclick = function() {
    let score = Number(guestNumberDisplay.textContent);
    score += 2;
    guestNumberDisplay.textContent = score;
};

plusThreeG.onclick = function() {
    let score = Number(guestNumberDisplay.textContent);
    score += 3;
    guestNumberDisplay.textContent = score;
};