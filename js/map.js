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
})();
