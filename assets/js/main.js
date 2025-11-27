const menu = document.querySelector('.hamburger-menu');

const navLinks = document.querySelector('.nav-links');

const closeButton = document.querySelector('.close-btn');

console.log(menu)

menu.addEventListener('click', () => {
    navLinks.style.display = "block";
})

closeButton.addEventListener('click', () => {
    navLinks.style.display = "none";
})