const text = "Hi, I am Akinsola Isaac.";
const speed = 120;

let index = 0;
const typingElement = document.getElementById("typing-text");

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

window.onload = typeText;

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


