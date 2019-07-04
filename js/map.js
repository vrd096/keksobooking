"use strict";
(function() {
  window.renderIcon();

  window.renderPopups = (function() {
    var fragmentPopup = document.createDocumentFragment();

    for (var i = 0; i < window.offer.length; i++) {
      var offer = window.offer[i];
      var popupElement = window.createPopupElement(offer);
      fragmentPopup.appendChild(popupElement);
    }

    document.querySelector(".map").appendChild(fragmentPopup);
  })();

  // var map = document.querySelector(".map");
  // var pinMain = document.querySelector(".map__pin--main");
  // var noticeForm = document.querySelector(".notice__form");
  // var noticeAddress = noticeForm.querySelector("#address");
  // var mapForm = document.querySelectorAll(".map__filter");
  // var pinElement = document.querySelectorAll(".map__pin");

  // var axesPin = function() {
  //   var pinX = Math.round(pinMain.offsetLeft);
  //   var pinY = Math.round(pinMain.offsetTop + 50);
  //   return (noticeAddress.value = pinX + "," + pinY);
  // };
  // axesPin();

  // pinMain.addEventListener("mouseup", function() {
  //   for (var i = 0; i < pinElement.length; i++) {
  //     pinElement[i].classList.remove("hidden");
  //   }
  //   for (var i = 0; i < mapForm.length; i++) {
  //     mapForm[i].removeAttribute("disabled");
  //   }
  //   map.classList.remove("map--faded");
  //   noticeForm.classList.remove("notice__form--disabled");
  //   axesPin();
  // });
})();
