"use strict";

(function() {
  var ESC_KEYCODE = 27;
  var map = document.querySelector(".map");

  function cardPopupHandler(evt) {
    var popupElements = document.querySelectorAll(".map__card");
    var popupCloseElms = document.querySelectorAll(".popup__close");

    popupElements.forEach(function(item) {
      var popupSrc = item.querySelector(".popup__avatar").src;

      if (evt.target.src === popupSrc) {
        item.classList.remove("hidden");
        map.removeEventListener("click", cardPopupHandler);

        document.addEventListener("keyup", function(evt) {
          if (evt.keyCode === ESC_KEYCODE) {
            cardPopupClosed(popupElements);
          }
        });
      }
    });

    popupCloseElms.forEach(function(item) {
      item.addEventListener("click", function() {
        cardPopupClosed(popupElements);
      });
    });
  }

  map.addEventListener("click", cardPopupHandler);

  function cardPopupClosed(items) {
    items.forEach(function(item) {
      item.classList.add("hidden");
    });

    map.addEventListener("click", cardPopupHandler);
    document.removeEventListener("keyup", cardPopupClosed);
  }

  function errorPopupClose() {
    var popupError = document.querySelector(".popup-error");

    popupError.classList.add("hidden");
    document.addEventListener("keyup", function(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        errorPopupClose();
        document.removeEventListener("keyup", errorPopupClose);
      }
    });
  }
  var popupErrorClose = document.querySelector(".popup-error__close");
  popupErrorClose.addEventListener("click", errorPopupClose);
  document.addEventListener("keyup", errorPopupClose);
})();
