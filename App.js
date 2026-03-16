const btnTrigger = document.querySelector(".burgerTrigger");
const btn = document.querySelector(".burgerMenu");
const list = document.querySelector("ul");
const signIn = document.querySelector("button.signIn");


btnTrigger.addEventListener("click", () => {
    btn.classList.toggle('active');
    list.classList.toggle('active');
    signIn.classList.toggle('active');
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});