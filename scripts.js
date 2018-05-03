var yellowButton = document.getElementById("buttonOne");
var purpleButton = document.getElementById("buttonTwo");
var buttonText = document.getElementById("buttonText");
yellowButton.addEventListener("click", function(e){
  console.log("--- yellow button clicked ---");
  buttonText.innerHTML = "I'm right";
});
purpleButton.addEventListener("click", function(e){
  console.log("--- purple button clicked ---");
  buttonText.innerHTML = "No I'm Right";
});
