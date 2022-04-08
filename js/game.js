const computerchoicedisplay = document.getElementById("com-choice");
const userchoicedisplay = document.getElementById("user-choice");
const result = document.getElementById("result");
const possiblechoices = document.querySelectorAll("button");
let userchoice;
let computerchoice;
let resultdisplay;
let background = document.querySelector("body");
console.log(background);
// button Event
possiblechoices.forEach((possiblechoice) =>
  possiblechoice.addEventListener("click", (e) => {
    userchoice = e.target.value;
    userchoicedisplay.innerHTML = userchoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * possiblechoices.length); // possiblechoices.length = 3;
  
  if (randomNum === 1) {
    computerchoice = "🐧";
  }
  if (randomNum === 2) {
    computerchoice = "🐤";
  }
  if (randomNum === 3) {
    computerchoice = "🐇";
  }
  if (randomNum === 4) {
    computerchoice = "🐼";
  }
  if (randomNum === 5) {
    computerchoice = "🐨";
  }
  if (randomNum === 6) {
    computerchoice = "🦢";
  }
  if (randomNum === 7) {
    computerchoice = "🦔";
  }
  if (randomNum === 8) {
    computerchoice = "🦭";
  }
  if (randomNum === 9) {
    computerchoice = "🦖";
  }
  computerchoicedisplay.innerHTML = computerchoice;
}
function getResult() {
  // 성공 - sweetalert cdn 이용
  if (computerchoice === userchoice) {
    resultdisplay = "성공!";
    swal({
      title: "그림찾기 성공!",
      text: "축하합니다:)",
      icon: "success",
      button: "Ok",
    });
  }
  // win & lose
  if (computerchoice === userchoice) {
    resultdisplay = "성공!";
  } else {
    resultdisplay = "틀렸지롱 ~";
  }
  result.innerHTML = resultdisplay;
}
