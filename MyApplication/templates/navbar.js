window.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
      var navBar = document.querySelector(".nav-bar");
      navBar.classList.toggle("active");
    };
  });
  $(document).ready(function() {

    console.log("script.js loaded"); // Dodanie console.log()
  
    // Ukryj wszystkie flagi, oprócz flagi UK
    $('.flag-item:not(#flag1)').hide();
  
    // Funkcja do tłumaczenia elementów na podstawie mapy translations
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
 
      }
      else if (language === "spqr") {
        translations = {
        
          // Dodaj inne tłumaczenia dla angielskiego tutaj
        };
        
      }
      
      for (var key in translations) {
        if (translations.hasOwnProperty(key)) {
          $(key).html(translations[key]);
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
      } else if (clickedFlag.attr("id") === "flag2") {
        // Jeśli kliknięto flagę UK, tłumacz na język angielski
        translateElements("en");
      } else if (clickedFlag.attr("id") === "flag3") {
        // Jeśli kliknięto flagę SPQR, tłumacz na język SPQR
        translateElements("spqr");
      } 
    });
  
    // Po zakończeniu animacji slideUp
    $('.flag-item').on('slideUp', function() {
      var flag = $(this);
      if (!flag.hasClass('open')) {
        flag.hide(); // Ukryj zwiniete flagi po zakończeniu animacji
      }
    });
  
    
  
      
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

  
  
  
  
  
  
  
  