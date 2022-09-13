const bottonE1 = document.querySelector(".botton");
const closeiconE1 = document.querySelector(".close-icon");
const trailercontainerE1 = document.querySelector(".trailer-container");
const videoE1 = document.querySelector(".video");

bottonE1.addEventListener("click",() => {
    trailercontainerE1.classList.remove("active");
});

closeiconE1.addEventListener("click",() => {
    trailercontainerE1.classList.add("active");
    videoE1.compareDocumentPosition();
    videoE1.currentTime = 0;
});

var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function()
    {
        rotateSum = rotateValue + "rotate(-90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    }
    
downBtn.onclick = function()
    {
        rotateSum = rotateValue + "rotate(90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    }


