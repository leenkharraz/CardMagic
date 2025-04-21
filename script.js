/*
This page was Coded and created by:  
Leen Kharraz  
ID: 2412099 
*/

window.onload = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  console.log("Welcome to CardMagic!🌟");
};

// Show centered custom message
function showMessage(text) {
  const box = document.getElementById("messageBox");
  const msg = document.getElementById("messageText");
  msg.innerText = text;
  box.style.display = "block";

  setTimeout(() => {
    box.style.display = "none";
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#subscribeForm");
  const emailInput = form.querySelector('input[type="email"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (!email) return showMessage("⚠️ Please enter a valid email address.");

    try {
      const res = await fetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      showMessage(data.message);

      if (res.ok) emailInput.value = "";
    } catch (err) {
      showMessage("❌ Something went wrong. Please try again.");
      console.error(err);
    }
  });
});
