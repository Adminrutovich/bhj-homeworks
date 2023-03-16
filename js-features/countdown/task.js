let alertYouWon = function () {
  let timer = document.getElementById("timer");
  timer.textContent = timer.textContent - 1;
  if (timer.textContent <= 0) {
      alert("Вы победили в конкурсе!");
      clearInterval(intervalID);
  }
}
const intervalID = setInterval(alertYouWon, 1000);