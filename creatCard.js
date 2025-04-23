document.addEventListener("DOMContentLoaded", function () {
    const previewArea = document.getElementById("previewArea");
    const inputText = document.getElementById("text");
    const enterBtn = document.getElementById("enterBtn");
    const headingBtn = document.getElementById("headingBtn");
    const subheadingBtn = document.getElementById("subheadingBtn");
    const bodyTextBtn = document.getElementById("bodyTextBtn");
    const colorInput = document.getElementById("textColor");
    const colorBtn = document.getElementById("colorBtn");
    const fontSelect = document.getElementById("fontSelect");
    const frameSelect = document.getElementById("frameSelect");
    const imageInput = document.getElementById("addImg");
    const saveBtn = document.getElementById("saveBtn");
  
    let selectedSize = "bodyText";
  
    // Text size change
    headingBtn.addEventListener("click", () => selectedSize = "heading");
    subheadingBtn.addEventListener("click", () => selectedSize = "subheading");
    bodyTextBtn.addEventListener("click", () => selectedSize = "bodyText");
  
    // Text color picker
    colorBtn.addEventListener("click", () => colorInput.click());
  
    // Enter text
    enterBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const textValue = inputText.value.trim();
      if (textValue !== "") {
        const p = document.createElement("p");
        p.textContent = textValue;
        p.classList.add(selectedSize);
        p.style.color = colorInput.value;
        p.style.fontFamily = fontSelect.value;
        p.style.border = "2px " + frameSelect.value + " black";
        p.style.padding = "10px";
        previewArea.appendChild(p);
        inputText.value = "";
      }
    });
  
    // Add an image
    imageInput.addEventListener("change", function () {
      const file = imageInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target.result;
          img.style.maxWidth = "200px";
          img.style.margin = "10px";
          img.style.border = "2px " + frameSelect.value + " black";
          img.style.padding = "5px";
          previewArea.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  
    // Save and go to Review Card
    saveBtn.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.setItem("cardContent", previewArea.innerHTML);
      window.location.href = "reviewCard.html";
    });
  });
