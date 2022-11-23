const panels = document.querySelectorAll(".panel");
panels.forEach(panel => { 
    panel.addEventListener("click", () => {
        removeSctive();
        panel.classList.add("active");  
    })
})
function removeSctive() { 

    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}