let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownValue.onclick = function(){
    dropdownList.classList.toggle('dropdown__list_active');
}

for(let i = 0; i < dropdownItem.length; i++){
    dropdownItem[i].onclick = function(){
        dropdownValue.textContent = dropdownItem[i].textContent;
        dropdownList.classList.toggle('dropdown__list_active');
        return false;
    }
}



