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

$(document).ready(function() {
    // Ukryj wszystkie flagi, oprócz flagi UK
    $('.flag-item:not(#flag1)').hide();
    
    // Po kliknięciu na flagę UK
    $('#flag1').click(function() {
      // Ukryj flagę UK
      $(this).hide();
      // Pokaż flagę Polski
      $('#flag2').show();
    });
    
    // Po kliknięciu na flagę Polski
    $('#flag2').click(function() {
      // Ukryj flagę Polski
      $(this).hide();
      // Pokaż flagę UK
      $('#flag1').show();
    });
       // Po kliknięciu przycisku "Zaloguj"
    $("#login-button").click(function (event) {
        event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu formularza

        var username = $("#username").val(); // Pobierz wartość pola loginu
        var password = $("#password").val(); // Pobierz wartość pola hasła

        if (username && password) {
            // Jeśli oba pola są wypełnione
            $("#Dane_uzytkownika").text(username); // Zaktualizuj treść elementu Dane_uzytkownika
            $("#login-form").removeClass("open"); // Zamknij formularz logowania
        }
    });
});
