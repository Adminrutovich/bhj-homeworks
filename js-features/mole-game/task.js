
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
for (let i = 1; i <= 9; i++) {
  function getHole (i) {
    let holeClick = document.getElementById(`hole${i}`);
    return holeClick;
  }
  let hole = getHole (i);
  hole.onclick = function() {
    if (hole.className.includes("hole_has-mole")) {
      dead.textContent++;
    } else {
        lost.textContent++;
    }
    if (parseFloat(dead.textContent) === 10) {
      alert ("ВЫ ПОБЕДИЛИ!");
      dead.textContent = 0;
      lost.textContent = 0;
    } else if (parseFloat(lost.textContent) === 5) {
        alert ("ВЫ ПРОИГРАЛИ!");
        dead.textContent = 0;
        lost.textContent = 0;
    }
  }
}