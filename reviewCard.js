document.addEventListener("DOMContentLoaded", function () {
  // يحمل لي محتى الكارد من لوكال ستورج
  const previewContent = localStorage.getItem("cardContent");
  if (previewContent) {
    document.getElementById("card-preview").innerHTML = previewContent;
  }

  // يحمل الصورة اذا اليوزر ضغط داونلود
  document.getElementById("download-btn").addEventListener("click", function () {
    html2canvas(document.getElementById("card-preview")).then(canvas => {
      const link = document.createElement("a");
      link.download = "card.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });

  // يرجع لصفحة الايدت
  document.getElementById("edit-btn").addEventListener("click", function () {
    window.location.href = "createCard.html";
  });
});
