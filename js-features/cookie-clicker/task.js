let image = document.getElementById("cookie");
let count = document.getElementById("clicker__counter");

function clickFunction() {
  let clickCount = +count.textContent;
  count.textContent = clickCount + 1;
  if (clickCount % 2 == 0 ) {
    image.width = 250;
  } else {
    image.width = 200;
  }
}

image.onclick = clickFunction; 