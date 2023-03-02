let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionThree = document.querySelector( ".option-three");
let optionTwoEnd = document.querySelector(".option-two-end");



buttonOne.onclick = function() {
    optionOneEnd.style.display = "block";
};

buttonTwo.onclick = function() {
    optionTwo.style.display = "block";
};

optionTwo.onclick = function() {
    optionTwoEnd.style.display = "block";
};