let modal = Array.from(document.querySelectorAll('.reveal'));

let  reveal = function(element){
   let {top, bottom} = element.getBoundingClientRect();

    if(bottom < 0){
        element.classList.remove('reveal_active');
    }else if(top > window.innerHeight){
        element.classList.remove('reveal_active');
    } else{
        element.classList.add('reveal_active');
    }
}

for(let i = 0; i < modal.length; i++) {
    window.addEventListener('scroll', function() { 
        reveal(modal[i]);
    })
}