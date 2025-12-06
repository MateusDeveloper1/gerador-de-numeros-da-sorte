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
  let count = parseInt(selectChoice.value, 10);

  switch (count) {
    case 6:
      numberLucky(count, 60);
      break;
    case 15:
      numberLucky(count, 25);
      break;
    case 20:
      numberLucky(count, 25)
      break;
    case 50:
      numberLucky(count, 99);
      break;
    default:
      break;
  }
});

function numberLucky(count, quantity) {
  let arrayNumbers = [];

  while (arrayNumbers.length < count) {
    result.innerHTML = "Sorteando...";
    let randomNumber = luckyNumber(1, quantity);

    if (!arrayNumbers.includes(randomNumber)) {
      arrayNumbers.push(randomNumber);
    }
  }

  arrayNumbers.sort((a, b) => a - b);

  let htmlContent = "";

  arrayNumbers.forEach((number) => {
    htmlContent += `<span class="circle">${number} </span>`;
  });


  result.innerHTML = htmlContent;
}

function luckyNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let result =
    Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;

  return result;
}
