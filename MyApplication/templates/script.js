$(document).ready(function() {
    var programVersion = " Beta 0.098.3"; // Numer programu
    
    function toggleForm() {
      var form = document.getElementById("login-form");
  
      if (form.classList.contains("closed")) {
        form.classList.remove("closed");
      } else {
        form.classList.add("closed");
      }
    }
  
    // Dodaj obsługę zdarzenia kliknięcia dla przycisku rejestracji
    var rejestracjaButton = document.getElementById("Rejestracja");
    rejestracjaButton.addEventListener("click", toggleForm);
  
    var images = ["zdj1.jpg", "zdj2.jpg", "zdj3.jpg"];
    var currentImageIndex = 0;
  
    function changeBackgroundImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      var imageUrl = images[currentImageIndex];
      document.body.style.backgroundImage = "url('" + imageUrl + "')";
    }
    setInterval(changeBackgroundImage, 5000); // Zmieniaj obraz co 5 sekund
    console.log("script.js loaded"); // Dodanie console.log()
  
    // Ukryj wszystkie flagi, oprócz flagi UK
    $('.flag-item:not(#flag1)').hide();
  
    // Funkcja do tłumaczenia elementów na podstawie mapy translations
    function translateElements(language) {
      var translations = {};
  
      if (language === "pl") {
        translations = {
          "Zaloguj": "Zaloguj",
          "Dane_uzytkownika": "Dane użytkownika",
          "Wersja_programu": "Wersja programu"+programVersion,
          "Autorzy": "Autorzy Jakub Kołodziej i Piotr Wieczorek"
          // Dodaj inne tłumaczenia dla polskiego tutaj
        };
      } else if (language === "en") {
        translations = {
          "Zaloguj": "Login",
          "Dane_uzytkownika": "User Data",
          "Wersja_programu": "Program version"+programVersion,
          "Autorzy": "Authors Jakub Kołodziej i Piotr Wieczorek"
          // Dodaj inne tłumaczenia dla angielskiego tutaj
        };
        var selectedFlag = $(".flag-item.open");
        var imageName = selectedFlag.data("image");
        $("#zdjecie").attr("src", imageName);
      }
  
      for (var key in translations) {
        if (translations.hasOwnProperty(key)) {
          $("#" + key).text(translations[key]);
        }
      }
    }
  
    // Ustaw flagę Polski jako domyślnie wybraną
    $("#flag1").addClass("open");
  
    // Wywołaj funkcję tłumaczącą elementy na język polski przy ładowaniu strony
    translateElements("pl");
  
    // Po kliknięciu na flagę
    $('.flag-item').click(function() {
      var clickedFlag = $(this);
      var otherFlags = $('.flag-item').not(clickedFlag);
  
      // Sprawdź, czy flaga jest już rozwinięta
      if (clickedFlag.hasClass('open')) {
        // Jeśli jest rozwinięta, zwiń ją
        clickedFlag.removeClass('open');
        otherFlags.slideDown(300); // Pokaż pozostałe flagi
      } else {
        // Jeśli nie jest rozwinięta, rozwij ją i ukryj pozostałe flagi
        clickedFlag.addClass('open');
        otherFlags.slideUp(300); // Zwiń pozostałe flagi
      }
  
      if (clickedFlag.attr("id") === "flag1") {
        // Jeśli kliknięto flagę Polski, tłumacz na język polski
        translateElements("pl");
      } else {
        // Jeśli kliknięto inną flagę, tłumacz na język angielski
        translateElements("en");
      }
    });
  
    // Po zakończeniu animacji slideUp
    $('.flag-item').on('slideUp', function() {
      var flag = $(this);
      if (!flag.hasClass('open')) {
        flag.hide(); // Ukryj zwiniete flagi po zakończeniu animacji
      }
    });
  
    // Po kliknięciu przycisku "Zaloguj"
    $("#login-button").click(function(event) {
      event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu formularza
  
      var username = $("#username").val(); // Pobierz wartość pola loginu
      var password = $("#password").val(); // Pobierz wartość pola hasła
  
      if (username && password) {
        // Jeśli oba pola są wypełnione
        $("#Dane_uzytkownika").text(username); // Zaktualizuj treść elementu Dane_uzytkownika
        $("#login-form").removeClass("open"); // Zamknij formularz logowania
      }
    });
  
    // Obsługa zdarzenia kliknięcia na dokument
    $(document).click(function(event) {
      var target = $(event.target);
  
      // Sprawdź, czy kliknięcie było na flagę lub jej obrazek
      if (!target.hasClass('flag-item') && !target.closest('.flag-item').length) {
        // Jeśli kliknięcie było gdzieś indziej, zwijaj flagi
        $('.flag-item').removeClass('open');
      }
    });
  });
  