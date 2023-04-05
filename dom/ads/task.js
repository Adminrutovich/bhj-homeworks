let rotator = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

function change() {
  if (index === rotator.length - 1) {
    index = 0;
  }
  rotator[index].classList.remove("rotator__case_active");
  rotator[index + 1].classList.add("rotator__case_active");
  index++;
}

setInterval(change, 1000);

