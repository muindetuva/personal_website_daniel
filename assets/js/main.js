const menu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const closeButton = document.querySelector(".close-btn");
const chatboxTrigger = document.querySelector("#chatbox-trigger");
const chatboxWindow = document.querySelector(".chatbox-window");
const chatbotCloseBtn = document.querySelector("#close-chat");
const chatForm = document.querySelector(".chat-form");
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector(".chat-messages");

menu.addEventListener("click", () => {
  navLinks.style.display = "block";
});

closeButton.addEventListener("click", () => {
  navLinks.style.display = "none";
});

chatboxTrigger.addEventListener("click", (e) => {
  chatboxWindow.style.display = "flex";
});

chatbotCloseBtn.addEventListener("click", () => {
  chatboxWindow.style.display = "none";
});

chatForm.addEventListener("submit", (e) => {
  // Prevent page reload
  e.preventDefault();

  const userText = chatInput.value;

  // Displaying the user message
  const userMessage = document.createElement("div");
  userMessage.classList.add("msg");
  userMessage.classList.add("user");
  userMessage.innerText = userText;
  chatMessages.appendChild(userMessage);

  // Clear the input
  chatInput.value = "";

  // Display bot response
  const botText = "Hi,I'm still dumb, check back in a few days 🙃";
  const botMessage = document.createElement("div");
  botMessage.classList.add("msg");
  botMessage.classList.add("bot");
  botMessage.innerText = botText;

  setTimeout(() => {
    chatMessages.appendChild(botMessage);
  }, 2000);
});
