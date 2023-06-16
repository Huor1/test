function toggleForm() {
    var form = document.getElementById("login-form");

    if (form.classList.contains("open")) {
        form.classList.remove("open");
    } else {
        form.classList.add("open");
    }
}
var images = ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg"];
var currentImageIndex = 0;

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  var imageUrl = images[currentImageIndex];
  document.body.style.backgroundImage = "url('" + imageUrl + "')";
}
setInterval(changeBackgroundImage, 5000); // Zmieniaj obraz co 5 sekund
console.log("script.js loaded"); // Dodanie console.log()