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
    computerchoice = "馃惂";
  }
  if (randomNum === 2) {
    computerchoice = "馃悿";
  }
  if (randomNum === 3) {
    computerchoice = "馃悋";
  }
  if (randomNum === 4) {
    computerchoice = "馃惣";
  }
  if (randomNum === 5) {
    computerchoice = "馃惃";
  }
  if (randomNum === 6) {
    computerchoice = "馃Β";
  }
  if (randomNum === 7) {
    computerchoice = "馃";
  }
  if (randomNum === 8) {
    computerchoice = "馃Ν";
  }
  if (randomNum === 9) {
    computerchoice = "馃";
  }
  computerchoicedisplay.innerHTML = computerchoice;
}
function getResult() {
  // 靹标车 - sweetalert cdn 鞚挫毄
  if (computerchoice === userchoice) {
    resultdisplay = "靹标车!";
    swal({
      title: "攴鸽彀娟赴 靹标车!",
      text: "於曧晿頃╇媹雼?:)",
      icon: "success",
      button: "Ok",
    });
  }
  // win & lose
  if (computerchoice === userchoice) {
    resultdisplay = "靹标车!";
  } else {
    resultdisplay = "韹?霠胳搿? ~";
  }
  result.innerHTML = resultdisplay;
}
