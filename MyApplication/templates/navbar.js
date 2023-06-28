window.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function() {
      var navBar = document.querySelector(".nav-bar");
      navBar.classList.toggle("active");
    };
  });
  
  $(document).ready(function() {
    console.log("script.js loaded");
  
    // Ukryj wszystkie flagi, oprócz flagi UK
    $(".flag-item:not(#flag1)").hide();
  
    function translateElements(language) {
      var translations = {};
  
      if (language === "pl") {
        translations = {
          // Dodaj inne tłumaczenia dla polskiego tutaj
        };
        // Zmiana obrazu na "Palac.jpg"
      } else if (language === "en") {
        translations = {
          // Dodaj inne tłumaczenia dla angielskiego tutaj
        };
        // Zmiana obrazu na "BigBen.jpg"
      } else if (language === "spqr") {
        translations = {
          // Dodaj inne tłumaczenia dla SPQR tutaj
        };
      }
  
      for (var key in translations) {
        if (translations.hasOwnProperty(key)) {
          $(key).html(translations[key]);
        }
      }
    }
  
    $("#flag1").addClass("open");
  
    translateElements("pl");
  
    $(".flag-item").click(function() {
      var clickedFlag = $(this);
      var otherFlags = $(".flag-item").not(clickedFlag);
  
      if (clickedFlag.hasClass("open")) {
        clickedFlag.removeClass("open");
        otherFlags.slideDown(300);
      } else {
        clickedFlag.addClass("open");
        otherFlags.slideUp(300);
      }
  
      if (clickedFlag.attr("id") === "flag1") {
        translateElements("pl");
      } else if (clickedFlag.attr("id") === "flag2") {
        translateElements("en");
      } else if (clickedFlag.attr("id") === "flag3") {
        translateElements("spqr");
        playMusic();
      }
    });
  
    $(".flag-item").on("slideUp", function() {
      var flag = $(this);
      if (!flag.hasClass("open")) {
        flag.hide();
      }
    });
  
    // Pobierz element audio
    var audio = document.getElementById("background-music");
  
    // Obsługa zdarzenia kliknięcia na dokument
    $(document).click(function(event) {
      var target = $(event.target);
  
      // Sprawdź, czy kliknięcie było na flagę lub jej obrazek
      if (!target.hasClass("flag-item") && !target.closest(".flag-item").length) {
        // Jeśli kliknięcie było gdzieś indziej, zwijaj flagi
        $(".flag-item").removeClass("open");
      }
    });
  
    // Funkcja odtwarzająca muzykę
    function playMusic() {
      audio.play();
    }
  
    // Funkcja zatrzymująca muzykę
    function stopMusic() {
      audio.pause();
      audio.currentTime = 0;
    }
  
    // Dodaj obsługę zdarzenia kliknięcia na flagę SPQR
    $("#flag3").click(function() {
      // Uruchom odtwarzanie muzyki po bezpośredniej interakcji użytkownika
      playMusic();
    });
  
    // Dodaj obsługę zdarzenia kliknięcia na flagę PL i UK
    $("#flag1, #flag2").click(function() {
      // Zatrzymaj odtwarzanie muzyki po zmianie tłumaczenia na PL lub UK
      stopMusic();
    });
  
    // Odtwórz muzykę po załadowaniu strony, jeśli flaga SPQR jest już wybrana
    if ($("#flag3").hasClass("open")) {
      playMusic();
    }
  });
  