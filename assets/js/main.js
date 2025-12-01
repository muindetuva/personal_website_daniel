const menu = document.querySelector('.hamburger-menu');

const navLinks = document.querySelector('.nav-links');

const closeButton = document.querySelector('.close-btn');

const chatboxTrigger = document.querySelector('#chatbox-trigger');

const chatboxWindow = document.querySelector('.chatbox-window');

const chatbotCloseBtn = document.querySelector('#close-chat');

menu.addEventListener('click', () => {
    navLinks.style.display = "block";
})

closeButton.addEventListener('click', () => {
    navLinks.style.display = "none";
})

chatboxTrigger.addEventListener('click', () => {
    chatboxWindow.style.display = "flex";
})

chatbotCloseBtn.addEventListener('click', () => {
    chatboxWindow.style.display = "none";
})