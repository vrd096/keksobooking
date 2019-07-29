"use strict";

// features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"] (6)
// guests: 6
// price: 42000
// rooms: 3
// type: "house"

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
  var features = new Set();

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
          features.add(value);
        } else {
          features.delete(value);
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
        [...features].some(feature => !offer.features.includes(feature))
      ) {
        return false;
      }

      return true;
    });
  }

  function renderPins(pins) {
    window.renderItems(pins, window.createPinElement, ".js-pins");
    window.renderItems(pins, window.createPopupElement, ".js-popups");

    document.querySelectorAll(".map__pin").forEach(function(item) {
      item.classList.remove("hidden");
    });
  }

  document
    .querySelector(".js-filters-form")
    .addEventListener("change", ({ target: filterElm }) => {
      console.log(filterElm);
      updateFilter(filterElm);
      const filteredPins = filterPins(window.loadedPins);
      renderPins(filteredPins);
    });
})();
