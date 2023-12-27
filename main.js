const menu = document.getElementById("menu");
const side = document.querySelector(".navbar").children[1];
menu.addEventListener('click', (e) => {
    side.classList.toggle('open')
})