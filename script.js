// Scroll Animation on Scroll
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  });
  
  // Carbon Footprint Calculator
  document.getElementById("carbon-footprint-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const usage = parseFloat(document.getElementById("usage-time").value);
    const type = document.getElementById("product-type").value;
    const resultBox = document.getElementById("calculator-result");
  
    if (isNaN(usage) || !type) {
      resultBox.textContent = "Please enter valid inputs.";
      return;
    }
  
    const rate = type === "electric" ? 0.5 : 0.2;
    const annual = usage * rate * 52; // 52 weeks
    resultBox.textContent = `Estimated carbon footprint: ${annual.toFixed(2)} kg CO₂/year.`;
  });
  
  // Contact Form using EmailJS
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm(
      "your_service_id",      // Replace with your EmailJS Service ID
      "your_template_id",     // Replace with your EmailJS Template ID
      this,
      "your_user_id"          // Replace with your EmailJS User ID
    )
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      alert("Failed to send message: " + error.text);
    });
  });
  