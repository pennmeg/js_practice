$(document).ready(function () {
  // Talking Buttons Challenge
  var yellowButton = document.getElementById("buttonOne");
  var purpleButton = document.getElementById("buttonTwo");
  var buttonText = document.getElementById("buttonText");
  yellowButton.addEventListener("click", function(e){
    console.log("--- yellow button clicked ---");
    buttonText.innerText = "I'm right";
  });
  purpleButton.addEventListener("click", function(e){
    console.log("--- purple button clicked ---");
    buttonText.innerText = "No, I'm Right";
  });
  // Hover Challenge
  $("#hoverBox").mouseenter(function(e){
    console.log("=== mouse hovers over box ===");
    hoverBox.innerHTML = "<p>Hey, I told you not to hover over me!</p>";
    hoverBox.style = "background-color: purple";
  })
  .mouseleave(function(e){
    hoverBox.innerHTML = "<p>Do not hover over me.</p>";
    hoverBox.style = "background-color: red";
  });
  // Keypress function
  $(document).keypress(function(event){
    console.log("--- keypress ---");
    $("#keystroke").text(String.fromCharCode(event.which));
  });
});
