const form = document.querySelector(".contact-form");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();

  status.textContent = name
    ? `Message sent successfully! Thanks, ${name}.`
    : "Message sent successfully";

  form.reset();
});