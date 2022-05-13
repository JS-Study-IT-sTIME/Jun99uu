const startBox = document.getElementById("start-box");
const startButton = document.getElementById("start-button");
const gameBox = document.getElementById("game-box");
const score = document.getElementById("score");
const hintBox = document.getElementById("hint-box");
const colorSelection = document.getElementById("color-selection");
const finishBox = document.getElementById("finish-box");
const finishIntro = document.getElementById("finish-intro");
const finishSubtro = document.getElementById("finish-subtro");
const regameButton = document.getElementById("regame");
const colorButton = document.getElementById("color-button");

let state = 0; //0일때 start, 1일때 game, 2일때 finish 보여줄 것임
let currentScore = 0;
let finalScore = 0;
const colorName = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chocolate",
  "Chartreuse",
  "Coral",
  "Crimson",
  "DarkBlue",
  "DarkCyan",
  "DarkSalmon",
  "Gold",
  "Gray",
  "Green",
  "Indigo",
  "MediumSeaGreen",
  "Olive",
  "Orange",
  "OrangeRed",
  "RoyalBlue",
  "Salmon",
  "SteelBlue",
  "Teal",
  "Tomato",
  "Turquoise",
  "Violet",
  "Yellow",
  "YellowGreen",
];

const stepShow = () => {
  switch (state) {
    case 0: //첫화면
      startBox.style.display = "block";
      gameBox.style.display = "none";
      finishBox.style.display = "none";
      break;
    case 1: //게임화면
      startBox.style.display = "none";
      gameBox.style.display = "block";
      finishBox.style.display = "none";
      gamePage();
      break;
    case 2: //끝난화면
      startBox.style.display = "none";
      gameBox.style.display = "none";
      finishBox.style.display = "block";
      break;
  }
};

const startHandler = () => {
  state = 1;
  stepShow();
};

const getRGB = (colorStr) => {
  //색상명 받아서 hex 값으로 변환
  let el = document.createElement("div");
  el.style["background-color"] = colorStr;
  document.body.appendChild(el);

  let style = window.getComputedStyle(el);

  let color = style["backgroundColor"];

  document.body.removeChild(el);

  let colorArray = color.replace(/rgb\(/, "").replace(/\)/, "").split(",");

  const quizColor = RGBtoHex(colorArray[0], colorArray[1], colorArray[2]);
  console.log(quizColor);
  return quizColor;
};

const RGBtoHex = (R, G, B) => {
  const hex = toHex(R) + toHex(G) + toHex(B);
  return hex;
};

const toHex = (n) => {
  if (n == null) return "00";

  n = parseInt(n);
  if (n == 0 || isNaN(n)) return "00";
  n = Math.max(0, n);
  n = Math.min(n, 255);
  n = Math.round(n);
  return (
    "0123456789ABCDEF".charAt((n - (n % 16)) / 16) +
    "0123456789ABCDEF".charAt(n % 16)
  );
};

const gamePage = () => {
  game();
};

const game = (finish) => {
  let quizColorName;
  let colorHex;
  quizColorName = colorName[Math.floor(Math.random() * colorName.length)];
  colorHex = getRGB(quizColorName);
  hintBox.textContent = `나는 #${colorHex}색이야!`;
  hintBox.style["background-color"] = quizColorName;
};

startButton.addEventListener("click", startHandler);
