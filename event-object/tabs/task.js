let tab = document.querySelectorAll(".tabs");

tab.forEach((element) => {
    let tabList = Array.from(element.querySelectorAll(".tab"));
    let tabContent = element.querySelectorAll(".tab__content");

    tabList.forEach((element) => {  
        element.addEventListener("click", (event) => {
            let indexElement = tabList.indexOf(element);
            
            tabList.forEach((element) => {
                element.classList.remove("tab_active");
                })
                
            tabContent.forEach((element) => {
                element.classList.remove("tab__content_active");
            })

            event.target.classList.add("tab_active");
            tabContent[indexElement].classList.add("tab__content_active");
        })   
    })

})

