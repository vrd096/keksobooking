"use strict";

(function() {
  const any = "any";
  const priceRanges = {
    low: { min: 0, max: 10000 },
    middle: { min: 10000, max: 50000 },
    high: { min: 50000, max: Infinity }
  };

  var houseType = any;
  var priceRange = any;
  var roomsNumber = any;
  var guestsNumber = any;
  var features = {};

  function updateFilter({ name, value, checked }) {
    switch (name) {
      case "housing-type":
        houseType = value;
        break;
      case "housing-price":
        priceRange = value === any ? any : priceRanges[value];
        break;
      case "housing-rooms":
        roomsNumber = value === any ? any : Number(value);
        break;
      case "housing-guests":
        guestsNumber = value === any ? any : Number(value);
        break;
      case "features":
        if (checked) {
          features[value] = true;
        } else {
          delete features[value];
        }
        break;
      default:
        throw new Error("unknown filter type");
    }
  }

  function filterPins(pins) {
    return pins.filter(({ offer }) => {
      if (houseType !== any && offer.type !== houseType) {
        return false;
      }

      if (roomsNumber !== any && offer.rooms !== roomsNumber) {
        return false;
      }

      if (guestsNumber !== any && offer.guests !== guestsNumber) {
        return false;
      }

      if (
        priceRange !== any &&
        (offer.price < priceRange.min || offer.price > priceRange.max)
      ) {
        return false;
      }

      if (
        features.size !== 0 &&
        Object.keys(features).some(feature => !offer.features.includes(feature))
      ) {
        return false;
      }

      return true;
    });
  }

  function renderPins(pins) {
    document.querySelectorAll(".map__pin").forEach(item => item.remove());
    document.querySelectorAll(".map__card").forEach(item => item.remove());

    window.renderItems(pins, window.createPinElement, ".map__pins");
    window.renderItems(pins, window.createPopupElement, ".map");

    document.querySelectorAll(".map__pin").forEach(function(item) {
      item.classList.remove("hidden");
    });
  }

  document
    .querySelector(".js-filters-form")
    .addEventListener("change", ({ target: filterElm }) => {
      updateFilter(filterElm);
      const filteredPins = filterPins(window.loadedPins);
      renderPins(filteredPins);
    });
})();
