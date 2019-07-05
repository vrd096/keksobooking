"use strict";

(function() {
  var ESC_KEYCODE = 27;
  var map = document.querySelector(".map");

  var targetPin = function(evt) {
    var popupElements = document.querySelectorAll(".map__card");

    for (var i = 0; i < popupElements.length; i++) {
      var popupSrc = popupElements[i].querySelector(".popup__avatar").src;

      if (evt.target.src === popupSrc) {
        popupElements[i].classList.remove("hidden");
        map.removeEventListener("click", targetPin);
        document.addEventListener("keyup", function(evt) {
          if (evt.keyCode === ESC_KEYCODE) {
            popupClosed();
          }
        });
      }
    }
  };

  map.addEventListener("click", targetPin);

  var popupClosed = function() {
    var popupCloseElms = document.querySelectorAll(".popup__close");
    var popupElements = document.querySelectorAll(".map__card");

    for (var i = 0; i < popupElements.length; i++) {
      popupElements[i].classList.add("hidden");
    }
    map.addEventListener("click", targetPin);
    document.removeEventListener("keyup", popupClosed);

    for (var i = 0; i < popupCloseElms.length; i++) {
      popupCloseElms[i].addEventListener("click", popupClosed);
    }
  };
})();
