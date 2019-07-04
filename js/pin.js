"use strict";

(function() {
  var mapInner = document.querySelector(".map__pins");
  // var fragmentIcon = document.createDocumentFragment();

  window.renderIcon = function(pins) {
    var pinElement = document
      .querySelector("template")
      .cloneNode(true)
      .content.querySelector(".map__pin");

    pinElement.classList.add("hidden");
    pinElement.style.left = pins.location.x + "px";
    pinElement.style.top = pins.location.y + "px";
    pinElement.querySelector("img").src = pins.author.avatar;
    pinElement.querySelector("img").alt = pins.offer.title;
    // fragmentIcon.appendChild(pinElement);
    // window.mapInner.appendChild(fragmentIcon);

    console.log(pinElement);
    return pinElement;
  };

  var successHandler = function(pins) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pins.length; i++) {
      fragment.appendChild(window.renderIcon(pins[i]));
    }
    mapInner.appendChild(fragment);
  };

  window.errorLoad = function(error) {
    console.log(error);
  };
  window.load(successHandler, window.errorLoad);
})();
