"use strict";
(function() {
  window.loadPins = [];
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

    document.querySelector(targetSelector).appendChild(fragment);
  };

  function handleLoadSuccess(pins) {
    pins = pins.map((pin, index) => ({ ...pin, id: index }));
    window.loadPins = pins;
    // console.log(pins);
    // window.updateFilter();
    renderItems(pins, window.createPinElement, ".map__pins");
    renderItems(pins, window.createPopupElement, ".map");
  }

  function handleLoadError(error) {
    console.log(error);
  }

  window.loadData(handleLoadSuccess, handleLoadError);
})();
