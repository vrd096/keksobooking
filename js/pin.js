"use strict";

(function() {
  var fragmentIcon = document.createDocumentFragment();
  window.renderIcon = function() {
    for (var i = 0; i < window.offer.length; i++) {
      var pinElement = document
        .querySelector("template")
        .cloneNode(true)
        .content.querySelector(".map__pin");
      pinElement.classList.add("hidden");
      pinElement.style.left = window.offer[i].location.x + "px";
      pinElement.style.top = window.offer[i].location.y + "px";
      pinElement.querySelector("img").src = window.offer[i].author;
      pinElement.querySelector("img").alt = window.offer[i].title;
      fragmentIcon.appendChild(pinElement);
      window.mapInner.appendChild(fragmentIcon);
    }
  };
})();
