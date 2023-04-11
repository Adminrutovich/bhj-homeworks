let arr = Array.from(document.querySelectorAll(".interest__check"));

let mainInterests = null;
let onClickCheck = function() {
    let interest = this.parentElement.parentElement;
    for (let node of interest.childNodes) {
        if(!node.nodeName.includes("text")) {
            if(node.className.includes("interests_active")) {
                mainInterests = node;
                break;
            }
        }
    }
    for(i = 0; i < arr.length; i++) {
        if(arr[i].closest(".interests_active") == mainInterests) {
            arr[i].checked = this.checked;
        }
    }
}


for(let i = 0; i < arr.length; i++) {
    if(!arr[i].closest(".interests_active")) {
        arr[i].onchange  = onClickCheck;
    }
}