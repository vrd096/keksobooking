"use strict";

(function() {
  var popupElement = document.querySelectorAll(".map__card");
  var popupClose = document.querySelectorAll(".popup__close");
  var ESC_KEYCODE = 27;
  var map = document.querySelector(".map");

  var targetPin = function(evt) {
    for (var i = 0; i < popupElement.length; i++) {
      var popupSrc = popupElement[i].querySelector(".popup__avatar").src;

      if (evt.target.src === popupSrc) {
        popupElement[i].classList.remove("hidden");
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
    for (var i = 0; i < popupElement.length; i++) {
      popupElement[i].classList.add("hidden");
    }
    map.addEventListener("click", targetPin);
    document.removeEventListener("keyup", popupClosed);
  };

  for (var i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener("click", popupClosed);
  }
})();
