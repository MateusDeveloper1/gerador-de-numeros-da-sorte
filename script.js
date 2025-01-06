const luckyButton = document.getElementById("lucky-button");
const result = document.getElementsByClassName("result")[0];
const selectChoice = document.getElementById("choice");
let count;

selectChoice.addEventListener("change", (event) => {
  if (event.target.value) {
    luckyButton.disabled = false;
  }

  if (event.target.value === "escolha") {
    luckyButton.disabled = true;
  }
  result.innerHTML = "";
});

luckyButton.addEventListener("click", () => {
  count = parseInt(selectChoice.value, 10);

  if (count === 6) {
    numberLucky(60);
  }

  if (count === 15) {
    numberLucky(25);
  }

  if (count === 50) {
    numberLucky(100);
  }
});

function numberLucky(quantity) {
  let arrayNumbers = [];

  while (arrayNumbers.length < count) {
    result.innerHTML = "Sorteando...";
    let randomNumber = luckyNumber(1, quantity);

    if (!arrayNumbers.includes(randomNumber)) {
      arrayNumbers.push(randomNumber);
    }
  }

  arrayNumbers.sort((a, b) => a - b);

  result.innerHTML = arrayNumbers.join(" - ");
}

function luckyNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let result =
    Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;

  return result;
}
