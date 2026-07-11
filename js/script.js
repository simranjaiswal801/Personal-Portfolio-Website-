

// ===============================
// Dark Mode
// ===============================

const darkModeBtn = document.getElementById("darkModeBtn");

// Load saved theme
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  darkModeBtn.textContent = "☀ Light Mode";
}

darkModeBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  darkModeBtn.textContent = isDark ? "☀ Light Mode" : "🌙 Dark Mode";

  localStorage.setItem("darkMode", isDark);
}

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const formMessage = document.getElementById("formMessage");

  if (name.length < 3) {
    formMessage.style.color = "red";
    formMessage.textContent = "Name must contain at least 3 characters.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    formMessage.style.color = "red";
    formMessage.textContent = "Message must be at least 10 characters long.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "✅ Message sent successfully!";

  form.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);
}

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
});