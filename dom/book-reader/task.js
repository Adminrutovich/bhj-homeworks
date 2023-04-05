let book = document.querySelector(".book");
let bookControls = document.querySelector(".book__controls");
let fontSizes = document.querySelectorAll(".font-size");

for (let control of bookControls.children) {
    control.addEventListener("click", change);
}

function change(status) {
    status.preventDefault();

    if (status.target.dataset.size === "big") {
      book.classList.add("book_fs-big");
      book.classList.remove("book_fs-small");
    } else if (status.target.dataset.size === "small") {
      book.classList.remove("book_fs-big");
      book.classList.add("book_fs-small");
    } else {
      book.classList.remove("book_fs-big");
      book.classList.remove("book_fs-small");
    }

    for (let fontSize of fontSizes) {
      fontSize.classList.remove("font-size_active");
    }

    status.target.classList.add("font-size_active");
}