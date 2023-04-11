let array = Array.from(document.querySelectorAll(".chat-widget"));

let onClickChat = function() {
    array[0].className += " chat-widget_active";
}

mes = ["Здрасте, сколько можно писать?",
       "Ходють тут всякие и топчут",  
       "Я вам ничего не должен", 
       "Ходи лесом",
       "Напугал ёжика голым задом",
       "Деду морозу пожалуйся"];

let onTypeChat = function(elem, e) {
    if((e.keyCode == 13) && (elem.value.trim() != "")) {
      let now = new Date();
      date1 = now.getHours() + ":" + now.getMinutes();
      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${date1}</div>
          <div class="message__text">
            ${elem.value}
          </div>
        </div>
      `;
      indx = Math.floor(Math.random() * 4);
      messages.innerHTML += `
        <div class="message">
          <div class="message__time">${date1}</div>
          <div class="message__text">
            ${mes[indx]}
          </div>
        </div>
      `;
      elem.value = "";
    }
}


let array2 = Array.from(document.querySelectorAll(".chat-widget__side"));
array2[0].addEventListener('click', onClickChat);

let inp = document.getElementById("chat-widget__input");
inp.addEventListener('keyup', (e) => {
    onTypeChat(inp, e);
});

const messages = document.querySelector( '.chat-widget__messages' );