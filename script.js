// Form validation + confirmation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent refresh

  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let confirmation = document.getElementById("confirmation");

  // Simple validation
  if (email === "" || message === "") {
    confirmation.style.color = "red";
    confirmation.textContent = "⚠️ Please fill out all fields.";
    return;
  }

  // Email format check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    confirmation.style.color = "red";
    confirmation.textContent = "⚠️ Please enter a valid email address.";
    return;
  }

  // Success message
  confirmation.style.color = "green";
  confirmation.textContent = "✅ Thank you! Your message has been sent successfully.";

  // Reset form
  document.getElementById("contactForm").reset();
});