let total = 0;
let strbuffer = "0";
let operator;
let resultScreen = document.querySelector(".result-screen");

function setListeners() {
  let calcButtons = document.querySelectorAll(".buttons");
  for (item of calcButtons) {
    console.log(item);
    item.addEventListener("click", function (event) {
      console.log(event.target.innerText);
      buttonClicked(event.target.innerText);
    });
  }
}

setListeners();

function buttonClicked(valueClicked) {
  if (isNaN(parseInt(valueClicked))) {
    makesSymbol(valueClicked);
  } else {
    makesNumber(valueClicked);
  }
  resultScreen.innerText = strbuffer;
  // to change text appearance
}

function makesNumber(value) {
  if (strbuffer === "0") {
    strbuffer = value;
  } else {
    strbuffer += value;
  }
}

function makesSymbol(symbol) {
  if (symbol === "C") {
    strbuffer = "0";
    total = 0;
  }
  if (symbol === "←") {
    strbuffer = strbuffer.substring(0, strbuffer.length - 1);
  } else if (symbol === "=") {
    if (operator === null) {
      return;
    }
    calculations();
    strbuffer = total;
    total = 0;
    operator = null;
  } else {
    const intBuffer = parseInt(strbuffer);
    if (total === 0) {
      total = intBuffer;
    } else {
      calculations();
    }
    operator = symbol;
    strbuffer = "0";
  }
}

function calculations() {
  const intBuffer = parseInt(strbuffer);
  if (operator === "+") {
    total += intBuffer;
  }
  if (operator === "x") {
    total *= intBuffer;
  }
  if (operator === "-") {
    total -= intBuffer;
  }
  if (operator === "÷") {
    total /= intBuffer;
  }
}
