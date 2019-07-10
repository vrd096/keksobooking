"use strict";
(function() {
  function renderItems(items, createElement, targetSelector) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < items.length; i++) {
      fragment.appendChild(createElement(items[i]));
    }

    document.querySelector(targetSelector).appendChild(fragment);
  }

  function handleLoadSuccess(pins) {
    renderItems(pins, window.createPinElement, ".map__pins");
    renderItems(pins, window.createPopupElement, ".map");
  }

  function handleLoadError(error) {
    console.log(error);
  }

  window.loadData(handleLoadSuccess, handleLoadError);
})();
