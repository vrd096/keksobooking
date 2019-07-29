"use strict";
(function() {
  window.renderItems = function renderItems(
    items,
    createElement,
    targetSelector
  ) {
    var fragment = document.createDocumentFragment();

    if (items.length > 5) {
      for (var i = 0; i < 5; i++) {
        fragment.appendChild(createElement(items[i]));
      }
    } else {
      items.forEach(function(item) {
        fragment.appendChild(createElement(item));
      });
    }

    const container = document.querySelector(targetSelector);
    container.textContent = '';
    container.appendChild(fragment);
  };

  function handleLoadSuccess(pins) {
    pins = pins.map((pin, index) => ({ ...pin, id: index }));
    window.loadedPins = pins;

    // window.updateFilter();
    renderItems(pins, window.createPinElement, ".js-pins");
    renderItems(pins, window.createPopupElement, ".js-popups");
  }

  function handleLoadError(error) {
    console.log(error);
  }

  window.loadData(handleLoadSuccess, handleLoadError);
})();
