let circleElem = document.querySelector(".progress circle");
let innerText = document.querySelector(".inner-text");

const r = parseInt(circleElem.getAttribute("r"));
const c = Math.PI*(r*2);

// Target percent here, this is 85
const toPercent = 85

const dashOffset = ((100-toPercent)/100) * c;


innerText.innerText = toPercent + "%";

setTimeout(() => {
  circleElem.style.strokeDashoffset = dashOffset;
  
}, 300);
console.log(1)
