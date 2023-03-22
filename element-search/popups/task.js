let modalMain = document.getElementById("modal_main");
let modalClose = document.querySelectorAll(".modal__close");
let showSuccess = document.querySelector(".show-success");
let modalSuccess = document.getElementById("modal_success");

modalMain.classList.add("modal_active");

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
      let parentModal = this.closest(".modal");
      parentModal.classList.remove("modal_active");
    }
  }

  showSuccess.onclick = function() {
    modalSuccess.classList.add("modal_active");
    modalMain.classList.remove("modal_active");
  }