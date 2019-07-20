"use strict";
(function() {
  window.loadPins = [];
  window.renderItems = function renderItems(
    items,
    createElement,
    targetSelector
  ) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 5; i++) {
      fragment.appendChild(createElement(items[i]));
    }

    document.querySelector(targetSelector).appendChild(fragment);
  };

  function handleLoadSuccess(pins) {
    window.loadPins = pins;
    // window.updateFilter();
    renderItems(pins, window.createPinElement, ".map__pins");
    renderItems(pins, window.createPopupElement, ".map");
  }

  function handleLoadError(error) {
    console.log(error);
  }

  window.loadData(handleLoadSuccess, handleLoadError);
})();
