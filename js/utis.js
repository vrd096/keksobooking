"use strict";

(function() {
  var map = document.querySelector(".map");
  var mapForm = document.querySelectorAll(".map__filter");
  var pinElement = document.querySelectorAll(".map__pin");
  var pinMain = document.querySelector(".map__pin--main");
  var popupElement = document.querySelectorAll(".map__card");
  var popupClose = document.querySelectorAll(".popup__close");
  var ESC_KEYCODE = 27;
  var noticeForm = document.querySelector(".notice__form");
  var noticeAddress = noticeForm.querySelector("#address");

  var axesPin = function() {
    var pinX = Math.round(pinMain.offsetLeft);
    var pinY = Math.round(pinMain.offsetTop + 50);
    return (noticeAddress.value = pinX + "," + pinY);
  };
  axesPin();

  pinMain.addEventListener("mouseup", function() {
    for (var i = 0; i < pinElement.length; i++) {
      pinElement[i].classList.remove("hidden");
    }
    for (var i = 0; i < mapForm.length; i++) {
      mapForm[i].removeAttribute("disabled");
    }
    map.classList.remove("map--faded");
    noticeForm.classList.remove("notice__form--disabled");
    axesPin();
  });

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
