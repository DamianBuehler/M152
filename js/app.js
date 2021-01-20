const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})

const main = document.querySelector(".main");

main.addEventListener("click", () => {
    if (container.classList = "container active")
    container.classList.toggle("active");
})