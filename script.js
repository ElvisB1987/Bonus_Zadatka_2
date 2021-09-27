var allQues = document.getElementsByClassName("question");
var quesBetwen = document.getElementsByClassName("questions");

for (i = 0; i < quesBetwen.length; i++) {
  quesBetwen[i].addEventListener("click", removeClass);
  console.log(quesBetwen);
}
function removeClass() {
  var changeClass = this.parentNode.className;
  for (i = 0; i < allQues.length; i++) {
    this.parentNode.className = "question close";
  }
  if (changeClass == "question close") {
    this.parentNode.className = "question open";
  }
}
