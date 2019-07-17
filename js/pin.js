"use strict";

(function() {
  window.createPinElement = function renderPin(pin) {
    var pinElement = document
      .querySelector("template")
      .cloneNode(true)
      .content.querySelector(".map__pin");

    pinElement.classList.add("hidden");
    pinElement.style.left = pin.location.x + "px";
    pinElement.style.top = pin.location.y + "px";
    pinElement.querySelector("img").src = pin.author.avatar;
    pinElement.querySelector("img").alt = pin.offer.title;

    return pinElement;
  };
})();
