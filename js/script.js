let total = 0;
let basketsCount = 0;
let socksCount = 0;
let bagsCount = 0;

const PRICES = {
  BASKETS: 100,
  SOCKS: 20,
  BAG: 50,
};

// Spots
const totalSpot = document.querySelector("span.total");
const basketsCountSpot = document.getElementById("baskets-count");
const socksCountSpot = document.getElementById("socks-count");
const bagsCountSpot = document.getElementById("bags-count");

// Add buttons
const addBasketsBtn = document.getElementById("add-baskets-btn");
const addSocksBtn = document.getElementById("add-socks-btn");
const addBagsBtn = document.getElementById("add-bags-btn");

// Remove buttons
const rmBasketsBtn = document.getElementById("rm-baskets-btn");
const rmsocksBtn = document.getElementById("rm-socks-btn");
const rmbagsBtn = document.getElementById("rm-bags-btn");

//delete
const delAllBaskets = document.getElementById("delete-baskets");
const delAllsocks = document.getElementById("delete-socks");
const delAllbags = document.getElementById("delete-bags");

// Likes
const likeBtns = document.querySelectorAll(".like-btn");

function init() {
  totalSpot.textContent = total + " $";
}

init();

function increaseTotal(value) {
  total = total + value;
  totalSpot.textContent = total + " $";
}

function decreaseTotal(value) {
  if (total > 0) {
    total = total - value;
    totalSpot.textContent = total + " $";
  }
}

// clic sur les boutons AJOUTER (bouton +)
// BASKETS
addBasketsBtn.addEventListener("click", function () {
  basketsCount++;
  basketsCountSpot.textContent = basketsCount;
  increaseTotal(PRICES.BASKETS);
});

// SOCKS
addSocksBtn.onclick = () => {
  socksCount++;
  socksCountSpot.textContent = socksCount;
  increaseTotal(PRICES.SOCKS);
};

//BAGS
addBagsBtn.addEventListener("click", function () {
  bagsCount++;
  bagsCountSpot.textContent = bagsCount;
  increaseTotal(PRICES.BAG);
});

// clic sur les boutons REDUIRE (bonton -)
// BASKETS
rmBasketsBtn.addEventListener("click", () => {
  if (basketsCount > 0) {
    basketsCount = basketsCount - 1;
    basketsCountSpot.textContent = basketsCount;
    decreaseTotal(PRICES.BASKETS);
  }
});

// SOCKS
rmsocksBtn.addEventListener("click", () => {
  if (socksCount > 0) {
    socksCount = socksCount - 1;
    socksCountSpot.textContent = socksCount;
    decreaseTotal(PRICES.SOCKS);
  }
});

// BAGS
rmbagsBtn.addEventListener("click", () => {
  if (bagsCount > 0) {
    bagsCount = bagsCount - 1;
    bagsCountSpot.textContent = bagsCount;
    decreaseTotal(PRICES.BAG);
  }
});

// clic sur les boutons SUPPRIMER (la corbeille)
// BASKETS
delAllBaskets.onclick = function () {
  decreaseTotal(basketsCount * PRICES.BASKETS);
  basketsCount = 0;
  basketsCountSpot.textContent = basketsCount;
};

// SOCKS
delAllsocks.onclick = function () {
  decreaseTotal(socksCount * PRICES.SOCKS);
  socksCount = 0;
  socksCountSpot.textContent = socksCount;
};

// BAGS
delAllbags.onclick = function () {
  decreaseTotal(bagsCount * PRICES.BAG);
  bagsCount = 0;
  bagsCountSpot.textContent = bagsCount;
};

// Clic sur les boutons LIKES
likeBtns.forEach(function (likeBtn) {
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("active");
  });
});
